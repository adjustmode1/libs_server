const conn = require('./../utils/connect')

const subject_of_me = (id_student)=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from subject as sb, member as m where sb.id_subject = m.id_subject and m.id_student = '${id_student}'`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const list = (query)=>{
    return new Promise((resolve,reject)=>{
        let index = query.index;
        let max_size = query.max_size;
        let title_subject = query.title_subject;
        let name_lecture = query.name_lecture;
        let sql1 = `select 
                        sb.id_subject,
                        sb.title_subject,
                        lt.id_lecture,
                        lt.name_lecture,
                        lt.avatar_lecture 
                    from subject as sb, lectures as lt 
                        where sb.id_lecture = lt.id_lecture and 
                        sb.title_subject like '%${title_subject}%' and 
                        lt.name_lecture like '%${name_lecture}%'`;
        let sql = `select 
                            count(sb.id_subject) as num_item
                        from subject as sb, lectures as lt 
                            where sb.id_lecture = lt.id_lecture and 
                            sb.title_subject like '%${title_subject}%' and 
                            lt.name_lecture like '%${name_lecture}%'`;
        if(max_size){
            sql1 = sql1 + `limit ${((index-1)*max_size)},${(index*max_size)}`
        }
        conn.query(sql1,(err1,data1)=>{
            if(err1){
                console.log('err1',err1)
                reject(err1)
            }else{
                conn.query(sql,(err,data)=>{
                    if(err){
                        console.log('err',err)
                        reject(err)
                    }else{
                        resolve({
                            total_item:data[0].num_item,
                            data:data1
                        });
                    }
                })
            }
        })
    })
}

const findOne = (id_subject)=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from subject where id_subject = '${id_subject}' limit 1`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

module.exports = {
    subject_of_me,
    list,
    findOne
}