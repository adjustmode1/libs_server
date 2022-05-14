const changeInfo = (oldstudent,newstudent)=>{
    if(
        newstudent.gender!==oldstudent.gender||
        (newstudent.address!==''&&oldstudent.address===null)||
        (newstudent.address!==oldstudent.address&&oldstudent.address!==null)||
        (newstudent.phone_number!==''&&oldstudent.phone_number===null)||
        (newstudent.phone_number!==oldstudent.phone_number&&oldstudent.phone_number!==null)||
        (newstudent.gmail!==''&&oldstudent.gmail===null)||
        (newstudent.gmail!==oldstudent.gmail&&oldstudent.gmail!==null)
        (newstudent.birthday!==''&&oldstudent.birthday===null)||
        (newstudent.birthday!==oldstudent.birthday&&oldstudent.birthday!==null)
        ){
        //  changeInfo({
        //      gender:newstudent.gender,
        //      address:newstudent.address,
        //      gmail:newstudent.gmail,
        //      phone_number:newstudent.phone_number,
        //      birthday:newstudent.birthday,
        //  })
        //  .then(result=>{
        //     return true;
        //  })
        //  .catch(err=>{
        //      console.log(err)
        //      return false;
        //  })
         return true;
     }
     return false;
}

module.exports = {
    changeInfo
}