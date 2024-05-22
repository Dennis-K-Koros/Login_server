//mongodb
require('./config/db');


const app = require('express')();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

const UserRouter = require('./api/user');

//for accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user',UserRouter)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})