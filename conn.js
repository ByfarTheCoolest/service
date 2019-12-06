let mysql = require('mysql');

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'node'
});

connection.connect();


let sql1 = 'select * from websites';


connection.query(sql1, function (err, results, fileds) {
    if (err) {
        //   throw error;
        console.log('错误', err);
        return;
    }
    console.log('运行结果为', results);
});