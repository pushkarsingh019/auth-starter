import auth from "../../auth/auth";

export default function login(req, res){
    let authenticateJWT = req.body.responseData;
    try {
        let variable = auth(authenticateJWT);
        if(variable.code === 0){
        res.json({code : 0, user : varibale.userObject});
            }
        else{
        res.json({code : 1, user : variable.userObject});
            }
    } catch (error) {
        res.send(`Error while authenticating the user -> ${error.message}`)
    }
}