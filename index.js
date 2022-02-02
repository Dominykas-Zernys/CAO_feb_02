const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')
const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.json(['BMW', 'Audi', 'VW'])
})

app.listen(8080, () => console.log('The server is running on port 8080'))