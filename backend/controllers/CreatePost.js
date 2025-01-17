import postsModel from "../models/posts.model.js";
const CreatePost = async (req, res)=> {
    const {coverimg, title, slug, desc, content} = req.body
    const user = req.userId
    console.log(user, "user")
    if(!user){
        return res.status(401).json({ message: "Access denied" })
    }
    try{
        const posts = await postsModel.create({
            user,coverimg, title, slug, desc, content
        })
        console.log(typeof posts,"posts")
        if(posts){
            res.status(201).json(posts)
        }
        else{
            res.status(500).json({"error": "Internal server error"})
        }
    } catch(e){
        console.log(e.errmsg, e.code)
        if(e.code === 11000){
            res.status(400).json({
                "error": e.keyValue?.slug
                  ? `Slug '${e.keyValue.slug.replace(/-/g, ' ')}'  already exists`
                  : "Slug already exists"
              });
        }
        else{
        res.status(500).json({"error": "Internal server error"})
        }
    }
}

export default CreatePost
