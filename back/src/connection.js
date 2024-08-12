const mysql = require("mysql2/promise"); //importação do mysql
//cria uma conecção com o banco de dados
const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@#Gisele2309",
  database: "teste_node",
});
module.exports = connection;
