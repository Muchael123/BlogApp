import jwt from 'jsonwebtoken'
export default function verifyToken (req, res, next){
    const Token = req.header('Authorization')
    if (!Token) {
        res.status(401).json({ message: "Access denied" })
        return;
    }
    try {
        const decoded = jwt.verify(Token, process.env.JWT_SECRET);
        if (typeof decoded !== 'object' || !decoded?.userId) {      
            res.status(401).json({ message: "Access denied" });  
            return;
        }
        const payload = decoded;
        req.userId = payload?.userId;
        req.role = payload?.role;
        console.log(req.userId, "req.userId, token verified")
        next()
    } catch (e) {
      res.status(401).json({ message: "Access denied" });  
      return;
    }
}