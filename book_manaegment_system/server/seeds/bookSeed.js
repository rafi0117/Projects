import config from "config";
import mongoose from "mongoose";
import "../dbConnect.js";
import Books from "../seeds/books.js";

import BookSchema from "../models/Book/index.js";


// let bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     author: {
//         type: String,
//         required: true,
//     },
//     coverImageUrl: {
//         type: String,
//         required: true,
//     },
//     id: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     pageCount: {
//         type: Number,
//         required: true
//     },
//     publisher: {
//         type: String,
//         required: true,
//     },
//     synopsis: {
//         type: String,
//         required: true,
//     },
// });

// let Book = new mongoose.model("Book", bookSchema, "book");


async function bookSeed() {
    try {
        // console.log(Books);
        await BookSchema.insertMany(Books);
        console.log("Books Seeded Successfully");
    } catch (error) {
        console.error(error);
    }
}
bookSeed();