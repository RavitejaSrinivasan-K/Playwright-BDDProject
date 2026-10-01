
import MYSQL from 'mysql2/promise'

export async function getConnection (){

  return await MYSQL.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "empdb" ,
    port : 3306
    })
}



