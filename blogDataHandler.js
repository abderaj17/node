const fs = require("fs");
const path = require("path");

const sample = path.join(__dirname,"../resources", process.env.SOURSE );
const getBlogs = ()=>{
    try{
        console.log(sample)
    }catch(err){
        console.log(err);
    }
}
module.exports = {getBlogs};