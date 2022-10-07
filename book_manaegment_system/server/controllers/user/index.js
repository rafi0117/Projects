import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "config";
import randomString from "../../utils/randomString.js";
import Users from "../../model/users/index.js";
import book from "../../model/book/index.js"
import generateToken from "../../middlewares/auth/index.js";
import { userRegisterValidatorRules, loginValidation, errorMiddleware, addbookvalidations } from "../../middlewares/validation/index.js";

const router = express.Router();



/*
End Point : /api/user/register
Method POST
Access : Public
Validation : 
        Password must be 8 characters minimum length, 1 uppercase, 1 special character,1 lowercase is mandatory
        Email address is unique and required field
        Firstname length not more than 25 characters
        password & password2 should match, but save password field only.
 Description: User Signup
*/

router.post("/register", userRegisterValidatorRules(), errorMiddleware, async (req, res) => {

   
    try {

        let { email, password } = req.body;
        // console.log(req.body);
        //Avoid Double Registration
        let userData = await Users.findOne({ email });
        if (userData) {
            return res.status(409).json({ "error": "Email Already Registered" })
        }
        userData = await Admin.findOne({ email });
        if (userData) {
            return res.status(409).json({ "error": "Email Already Registered" })
        }

        req.body.password = await bcrypt.hash(password, 12);
        const user = new Users(req.body);

        user.userverifytoken = randomString(15);
        await user.save();

        res.status(200).json({ "success": "User Registered Successfully" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" })
    }
});


router.post("/login", loginValidation(), errorMiddleware, async (req, res) => {
    try {

        let { email, password } = req.body;

        let userFound = await Users.findOne({ email });
        if (!userFound) {
            return res.status(401).json({ error: "Invalid Credentials[user not found] " });
        }

        let matchPassword = await bcrypt.compare(password, userFound.password);
        console.log(matchPassword);
        if (!matchPassword) {
            return res.status(401).json({ error: "Invalid Credentials 'password not match' " });
        }

        let payload = {
            user_id: userFound.user_id,
            role: "user",
        };


        //GENERATE A TOKEN
        const token = generateToken(payload);
        // console.log(token);
        res.status(200).json({ success: "Login is Successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post("/AddBook", addbookvalidations(), errorMiddleware, async (req, res) => {
    try {


        //Check for Authorisation
        let token = req.headers["auth-token"];
        if (!token) {
            return res.status(401).json({ error: "Unauthorised Access 107" });
        }
        const payload = jwt.verify(token, "codeforindia");
        // console.log(payload);
        if (!payload) {
            return res.status(401).json({ error: "Unauthorised Access112" });
        }


        //Check Req.body
        let { title, Author, coverImagrUrl, id, PageCount, publisher, synopsis } = req.body;

        //    let Book_id=randomString(14)
        let userFound = await Users.findOne(payload.id)
        console.log(userFound)
        let Book_data = {
            title,
            Author,
            coverImagrUrl,
            id,
            PageCount,
            publisher,
            synopsis
        }
        console.log(Book_data)
        const user = new book(Book_data);
        // console.log(userFound.BOOKS=[Book_data])
        //  userFound.push(Book_data);
        await user.save();
        res.status(200).json({ success: "Book was Added" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get("/searchBook", async (req, res) => {
    try {
        let book = await new book.find({})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

export default router;