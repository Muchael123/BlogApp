
async function  Register (req, res){
    try{
        const {email, password,username, image} = req.body
        password = await bcrypt.hash(
            password,10
          );
          
    }
     catch(e){
        
        console.log(e)
    }
}
