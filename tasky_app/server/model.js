import mongoose from "mongoose";
// const { Schema } = mongoose;
// https://mongoosejs.com/docs/guide.html#definition
const Schema = mongoose.Schema;
const task = new Schema({
    tasks: {
        task_name:{
            type:String,
            required:true
        },
        deadline:{
            type: Date,
            required:true
        },
        isCompleted:{
            type:Boolean,
            default:false
        },
        reminders: {
        type:[Date]
        }
    }
})
const userschema = new Schema({
    user:{
        firstname: {
            type: String,
            required: true,
            maxlength: 25,
            minlength: 2
        },
        lastname: {
            type: String,
            required: true,
            maxlength: 25,
            minlength: 2
        },
       password:{
        type:String,
        required:true
        },
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        phone: {
            type: String,
            required: true,
            unique:true
        }
       }
})
   

   

const taskModel = new mongoose.model("Task_user", task, "Task_scheduling");

export default taskModel;