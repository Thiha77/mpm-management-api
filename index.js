const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes');
// const con = require('./db')

app.use(bodyParser.json())
app.use(router)
// con.connect((err) => {
//     if(err) throw err;
//     console.log('Mysql is connected')
// })

app.listen(5000, () => {
    console.log('Node Server is listening on port 3000....')
});
