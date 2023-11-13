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
export const db = mysql.createPool({
    host : '', // 호스트명 
    user : '', // 사용자
    password : '', // 비밀번호
    connectionLimit : '' // 연결제한수
});


