const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',          
  password: 'chonjen2hack', 
  database: 'todo_db',
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.error(' Erreur de connexion MySQL :', err);
    return;
  }
  console.log('Connecté à MySQL');
});

module.exports = connection;
