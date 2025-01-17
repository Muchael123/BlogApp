import { Router } from "express";
import CreateUser from "../controllers/CreateUser.controller.js";
import VerifySigUpDetails from "../middlewares/VerifySignUp.mid.js";
import VerifyLogin from "../middlewares/VerifyLogin.js";
import Login from "../controllers/login.controller.js";
const router = Router()

// login

router.post("/login", VerifyLogin, Login)

// register
router.post("/register", VerifySigUpDetails, CreateUser)


// forgot password

export default router
