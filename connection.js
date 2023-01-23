const mysql=require("mysql")
const pool=mysql.createPool({
  connectionLimit:10,
  host : 'localhost',
  user: 'root',
  password:"root123",
  database:"localhost_videomagic",
})

module.exports=pool;