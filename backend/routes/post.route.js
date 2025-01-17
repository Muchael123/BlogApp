import { Router } from "express";
import FetchAllposts from "../controllers/fetchAllposts.js";
import postMiddleware from "../middlewares/postMiddleware.js";
import CreatePost from "../controllers/CreatePost.js";
import CreateSlug from "../middlewares/CreateSlug.js";
import verifyToken from "../middlewares/VerifyToken.mid.js";
const router = Router();


// get all posts by pagination

router.get("/", FetchAllposts)

//get single post

//add post

router.post("/",verifyToken, CreateSlug ,postMiddleware, CreatePost )

//edit post


//delete post

export default router