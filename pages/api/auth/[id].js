
import auth from "../../../auth/auth";

export default function handler(req, res){
    try {
        let userId = req.body.userJWT;
        let {id} = req.query;
        let response = auth(userId);
        if(id === response.userObject.given_name){
            res.json({status : "authorised"})
        }
        else{
            res.json({status : "authorisation denied"})
        }
    } catch (error) {
        res.send(error.message);
    }
}