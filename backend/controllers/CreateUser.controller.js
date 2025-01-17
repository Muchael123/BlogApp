import HashPassword from '../lib/HashPassword.js';
import userModel from '../models/users.model.js';

async function CreateUser (req, res) {
    const {username, email, password} = req.body;
    const pass = await HashPassword(password);
    console.log(password)
    try{
        const user = await userModel.create({
            username, email, password: pass
        })
        if(user){
            res.status(201).json({"message" : "User created successfully"})
        }
        else{
            res.status(500).json({"message": "Could not create user. Please try again."})
        }
    } catch(e){
        console.log(e.errmsg, e.code)
        if(e.code === 11000){
            res.status(400).json({
                "error" : "Email already exists"
              });
        }
        else{
        res.status(500).json({"error": "Internal server error"})
        }
    }
}

export default CreateUser
