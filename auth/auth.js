// to verify the jwt message and see if the user exists or not.
import jwtDecode from "jwt-decode";
import userModel from "../models/userModels";

function auth(accessToken){
    let userObject;
    if(accessToken){
        userObject = jwtDecode(accessToken);
        if(userModel.some(user => user.email === userObject.email)){
            return {code : 0, userObject}
        }
        else{
            userModel.push({
                name : userObject.name,
                email : userObject.email
            });
            return {code : 1, userObject}
        }
    }
    else{
        return {code : 404, message : "access token does not exist"}
    }
};

export default auth;