import validator from 'validator';

export default function VerifySigUpDetails (req, res, next) {
    // username, email, password
    console.log(req.body);
    const errors = [];
    if (!req.body.username || !req.body.email || !req.body.password) {
        errors.push("Please fill in all fields");
    }
    if (!validator.isEmail(req.body.email))
    {
        errors.push("Please enter a valid email address");
    }
    if(!validator.isStrongPassword(req.body.password)){
        errors.push("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character");
    }
    if(req.body.username.length < 3){
        errors.push("Username must be at least 3 characters long");
    }
    if(errors.length > 0){
        return res.status(400).json({errors});
    }
    else{
        next();
    }
  
}
