require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');

function createToken(myUser){
    return sign({
        emailAdd: myUser.emailAdd,
        user_password: myUser.user_password
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}
function verifyToken(req, res, next) {
    try{
        const token = req.cookies["LegitUser"] !== null ? req.cookies["LegitUser"] : "Please Register!!!";
        const Validated = null;
        if(token !== "Please Register As A New User!!!") {
            Validated = verify(token, process.env.SECRET_KEY);
            if(Validated){
                req.authenticated = true;
                next();
            }else{
                res.status(400).json({err: "Please Register User!!!"});
            }
        }else{
            res.status(400).json({err: "Please Register User!!!"});
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}
module.exports = {createToken, verifyToken};