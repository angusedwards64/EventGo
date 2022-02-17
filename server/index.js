const express = require('express');
const app = express();
const port = 3010;
const cors = require('cors');
const router = require('./router');
// const { db } = require('./model')


app.use(cors())
app.use(express.json())
app.use(router)




    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`)
    });






