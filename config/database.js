const mysql = require('mysql2');

// Conexion a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexion:', err);
        return;
    }

    console.log('Conectado a MySQL');
});

module.exports = db;