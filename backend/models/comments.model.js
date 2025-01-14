import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export default model("User", UserSchema);