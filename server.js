const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8033;
app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    // res.json({ success: true, });
    res.render('index.ejs');
});

// DB poll 생성 
const db = mysql.createPool({
    host : 'localhost', // 호스트명 
    user : 'gasipan', // 사용자
    password : 'gasipan', // 비밀번호
    database : 'sample_db',
    connectionLimit : '' // 연결제한수
});

module.exports = { db };

