//  mysal 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: 'database-1.cswxscymavnw.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'retfo2023',
    database: 'comicbook',
    port: '3306',
});

connection.connect();
module.exports = connection;