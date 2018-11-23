const express = require('express');
const app = express();
//you will need to create 'productInventoryList' for below line to work 
// const productList = require('productInventoryList');
const productList = [];
// delete above empty array when file is created and available. 

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

xprex.get('/product/:id', (req, res) => {
    const productCode = parseInt(req.params.id);
    const productItem = productList.find((pItem) =>
    { return pItem.id === productCode})
    console.log(productItem);
    res.json(productItem); 
  })






app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}`)
})