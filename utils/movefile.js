const fs = require('fs');

const moveFile = (oldPath,newPath,callback)=>{
    fs.rename(oldPath, newPath, (err)=> {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                callback(err);
            }
            return;
        }
        callback();
    });
}

const copyFile = (oldPath,newPath,callback)=>{
    fs.copyFile(oldPath,newPath,err=>{
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                callback(err);
            }
            return;
        }
        callback();
    })
}

module.exports = {
    moveFile
}