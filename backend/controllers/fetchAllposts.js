import postsModel from "../models/posts.model.js";

const FetchAllposts = async (req, res) => {
//fetch by pagination
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
   try{
    const posts = await postsModel.find().limit(limit).skip((page - 1) * limit);
    if(posts === null || posts.length === 0){
        res.status(404).json({message : "No posts found"})
    }
    else{
        res.status(200).json(posts)
    }
   }
   catch(e){
         console.log(e)
         res.status(500).json({"error": "Internal server error"})
    }
}

export default FetchAllposts
