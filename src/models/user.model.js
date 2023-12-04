import mongoose from "mongoose";

const userCollection = 'Users'

const userSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : String,
    age : Number,
    password: String,
    rol: {
        type: String,
        default: "user"
    }
})

export const userModel = mongoose.model(userCollection, userSchema)

