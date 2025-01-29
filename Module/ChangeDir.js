const fs = require('fs');
const path = require('path')

function changeDir(currentDir, newDir){
    const newPath = path.resolve(currentDir, newDir);

    if(fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()){
        console.log(`Changed pwd to : ${newPath}`);
        return newPath;
    }else{
        console.error("Invalid Directory");
        return currentDir;
    }
}

module.exports = {changeDir}