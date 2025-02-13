const {connect} = require('mongoose');
const ConnectDB = async(url)=>{
    try{
        await connect(url);
        console.log("Connected to Data Base");
    } catch(err){
        console.error("MongoDB connection erroe:",err);
    }
}
module.exports = ConnectDB;