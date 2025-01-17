import ComparePassword from "../lib/ComparePassword.js";
import usersModel from "../models/users.model.js";
import jwt from 'jsonwebtoken'

export default async function Login (req, res){
    const {email, password} = req.body;
    try{
        const user = await usersModel.findOne({
            email
        })
        if(!user){
            res.status(400).json({"error": "wrong email or password"})
            return;
        }
        else{
            console.log(user)
            const valid = ComparePassword(password, user.password);
            if(!valid){
                res.status(401).json({"error": "wrong email or password"})
                return;
            }
            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "30d" }
              );
              res.status(200).json({token: token, user: user.name, email: user.email, role: user.role})
              return;   
        }
    } catch(e){
        console.log(e)
        res.status(500).json({"error": "Internal server error"})
    }
}