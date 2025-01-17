import validator from 'validator';

export default function VerifyLogin (req, res, next){
    const {email, password} = req.body;
    const errors = [];
    if(!email || !password){
       errors.push("Please fill in all fields");
    }
    if(email && !validator.isEmail(email)){
        errors.push("Please enter a valid email address");
    }
    if(errors.length > 0){
        return res.status(400).json({errors});
    }
 next();
}
