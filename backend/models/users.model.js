import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    image:  {
        type: String,
    },
    savedPosts:  {
        type: [String],
        default: [],
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export default model("Users", UserSchema);