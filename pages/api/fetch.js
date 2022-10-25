import userModel from "../../models/userModels"

function fetch(req, res){
    res.json({code : 200, data : userModel});
};

export default fetch;