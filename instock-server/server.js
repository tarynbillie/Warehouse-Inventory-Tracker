const express = require('express');
const xpress = express(); 
const invList = require('./data/InventoryDataXList');

console.log(invList);

xpress.get('/warehouse/:id', (req, res) => {
    const wareHouseidprovided = (req.params.id);
    // const wareHouseidprovided = '001';
    const invSublist = invList.filter((invItem) => 
    { return invItem.warehouseID  === wareHouseidprovided})
    console.log(invSublist);
    res.json(invSublist); 
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

app.get('/product/:id', (req, res) => {
    const productCode = parseInt(req.params.id);
    const productItem = productList.find((pItem) =>
    { return pItem.id === productCode})
    console.log(productItem);
    res.json(productItem); 
  })

inventory= [
    {
        productID: 1,
        warehouseID: '1jhdsfkjhskjdh',
        name: 'Socks',
        description: 'Premium socks made from Russian elk fur',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 2,
        warehouseID: '2jhdsfkjhskjdh',
        name: 'Shoes',
        description: 'Nike high tops with a solid gold swoosh, because money',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 3,
        warehouseID: '3jhdsfkjhskjdh',
        name: 'Pants',
        description: 'Sweet ass cargo pants with enough pockets for all your drugs',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 4,
        warehouseID: '4jhdsfkjhskjdh',
        name: 'Shirt',
        description: 'Gucci, its all Gucci',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 5,
        warehouseID: '5jhdsfkjhskjdh',
        name: 'Hat',
        description: 'Snap back, for when you go bald',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 6,
        warehouseID: '6jhdsfkjhskjdh',
        name: 'Sweater',
        description: 'Pre-stained baggy sweater for that "im still drunk" look',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 7,
        warehouseID: '7jhdsfkjhskjdh',
        name: 'Spanx',
        description: 'Look skinny in secconds! May cause organ displacement',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
    {
        productID: 8,
        warehouseID: '8jhdsfkjhskjdh',
        name: 'bandana',
        description: 'Were all gansters at heart',
        lastOrdered: '05/24/2018',
        orderedBy: 'Jim Bob',
        referenceNo: 'jhdsfhk76832738223',
        productCategory: 'Automotive',
        quantity: 2000,
        location: 'Toronto, ON',
        status: 'in stock'
    },
]

warehouseInfo=[
    {
        warehouseID: 1,
        warehouseName: "Warehouse Number 1",
        street: '123 Main Street West',
        city: 'Toronto, Canada',
        postal: 'M6J 2H2',
        contactName:'Mara Weinberg, Warehouse Manager',
        contactNumber: '+1 416 678 2345',
        contactEmail: 'mweinberg@instack.com',
        inventoryType: 'Industrial, Automotive, Heavy Industry'
    },
    {
        warehouseID: 2,
        warehouseName: "Warehouse Number 2",
        street: '123 Main Street West',
        city: 'Toronto, Canada',
        postal: 'M6J 2H2',
        contactName:'Mara Weinberg, Warehouse Manager',
        contactNumber: '+1 416 678 2345',
        contactEmail: 'mweinberg@instack.com',
        inventoryType: 'Industrial, Automotive, Heavy Industry'
    },
    {
        warehouseID: 3,
        warehouseName: "Warehouse Number 3",
        street: '123 Main Street West',
        city: 'Toronto, Canada',
        postal: 'M6J 2H2',
        contactName:'Mara Weinberg, Warehouse Manager',
        contactNumber: '+1 416 678 2345',
        contactEmail: 'mweinberg@instack.com',
        inventoryType: 'Industrial, Automotive, Heavy Industry'
    },
    {
        warehouseID: 4,
        warehouseName: "Warehouse Number 4",
        street: '123 Main Street West',
        city: 'Toronto, Canada',
        postal: 'M6J 2H2',
        contactName:'Mara Weinberg, Warehouse Manager',
        contactNumber: '+1 416 678 2345',
        contactEmail: 'mweinberg@instack.com',
        inventoryType: 'Industrial, Automotive, Heavy Industry'
    },
]


app.get('/inventory', (req,res)=>{
    res.json(inventory)
})

app.get('/warehouses', (req,res)=>{
    res.json(warehouseInfo)
})


app.delete('/inventory/deleteItem/:id', (req,res) => {
    let itemIndex = inventory.findIndex(item => item.productID === Number(req.params.id));
    inventory.splice(itemIndex, 1);
    res.json({msg: 'item deleted from inventory'});
})

  xpress.listen(8080, () => {
    console.log('server is listening on 8080')
  })