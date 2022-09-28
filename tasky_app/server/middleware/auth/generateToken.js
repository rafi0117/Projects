import jwt from "jsonwebtoken";
// import cryptoJS from 'crypto-js';




let private_key = config.get("codeforindia");

function generateToken(payload) {
    try {
        const token = jwt.sign(payload, private_key, { expiresIn: "7d" });
        return token;
    } catch (error) {
        console.error(error);
        return
    }
}

export default generateToken;