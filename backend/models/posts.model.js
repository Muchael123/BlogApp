import { model, Schema } from "mongoose";

const PostSchema
 = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    coverimg: {
        type: String,
    },
    title:  {
        type: String,
        required: true,
    }, 
    slug:  {
        type: String,
        required: true,
        unique: true,
    },
    desc:  {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    visited: {
        type: Number,
        default: 0,
    },
   
}, {
    timestamps: true
});

export default model("Post", PostSchema);