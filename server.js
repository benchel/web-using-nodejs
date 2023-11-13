const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 8033;

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});

// DB poll 생성 
const db = mysql.createPool({
    host : 'localhost', // 호스트명 
    user : 'gasipan', // 사용자
    password : 'gasipan', // 비밀번호
    database : 'sample_db',
    connectionLimit : '' // 연결제한수
});

db.getConnection((error, connect) => {
    if(error) throw error;
    else {
        connect.query('SELECT * FROM board', (error, results) => {
            if(error) throw error;
            else console.log(results);
        });
        connect.release();
    }
});

