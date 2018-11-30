const express = require('express');
const app = express(); 
const invList = require('./data/InventoryDataList');
const whseList = require('./data/WarehouseDataList');

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


app.get('/inventory', (req,res)=>{
    res.json(invList)
})

app.get('/warehouses', (req,res)=>{
    res.json(whseList)
})

app.get('/warehouse/:id', (req, res) => {
    const wareHouseidprovided = parseInt(req.params.id);
    const invSublist = invList.filter((invItem) => 
    { return invItem.warehouseID  === wareHouseidprovided})
    res.json(invSublist); 
    }
)

app.get('/inventory/:id', (req, res) => {
    const incomingProductid = parseInt(req.params.id);
    const productDetail = invList.find((pItem) => 
    { return pItem.productID  === incomingProductid})
    res.json(productDetail); 
    }
)


const newWarehouse = []
let lastId = 5
app.post('/warehouses', (req, res) => {
    const newWarehouse = {
        warehouseID: lastId++,
        warehouse: req.body.warehouse,
        street: req.body.street,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        mgmt: req.body.mgmt,
        phone: req.body.phone,
        email: req.body.email,
        inventoryType: req.body.inventoryType
    }
    whseList.push(newWarehouse);
    res.json(newWarehouse)
    res.status(400).send('Oppsies');
    
})


app.delete('/inventory/deleteItem/:id', (req,res) => {
    let itemIndex = invList.findIndex(item => item.productID === Number(req.params.id));
    invList.splice(itemIndex, 1);
    res.json({msg: 'item deleted from inventory'});
})

  app.listen(8080, () => {
    console.log('server is listening on 8080')
  })
