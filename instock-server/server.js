const express = require('express');
const app = express(); 
const invList = require('./data/InventoryDataList');
const whseList = require('./data/WarehouseDataList');
console.log(invList);
console.log(whseList);

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

// app.get('*', (req,res)=>
// { res.status(404).render("sorry what you seek is not here!")})

app.get('/inventory', (req,res)=>{
    res.json(invList)
})
app.get('/warehouses', (req,res)=>{
    res.json(whseList)
})

app.get('/warehouse/:id', (req, res) => {
    const wareHouseidprovided = parseInt(req.params.id);
//    const wareHouseidprovided = 1;
    const invSublist = invList.filter((invItem) => 
    { return invItem.warehouseID  === wareHouseidprovided})
    console.log(invSublist);
    res.json(invSublist); 
    }
)

app.get('/inventory/:id', (req, res) => {
    const incomingProductid = parseInt(req.params.id);
//    const incomingProductid = 1;
    const productDetail = invList.find((pItem) => 
    { return pItem.productID  === incomingProductid})
    console.log(productDetail);
    res.json(productDetail); 
    }
)
app.delete('/inventory/deleteItem/:id', (req,res) => {
    let itemIndex = inventory.findIndex(item => item.productID === Number(req.params.id));
    inventory.splice(itemIndex, 1);
    res.json({msg: 'item deleted from inventory'});
})

  app.listen(8080, () => {
    console.log('server is listening on 8080')
  })
