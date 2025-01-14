import postsModel from "../models/posts.model.js";
const CreatePost = async (req, res)=> {
    const {user,coverimg, title, slug, desc, content} = req.body
    try{
        const posts = await postsModel.create({
            user,coverimg, title, slug, desc, content
        })
        console.log(typeof posts,"posts")
        if(posts){
            
            res.status(200).json(posts)
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
