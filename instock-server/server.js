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

app.get('/product/:id', (req, res) => {
    const productCode = parseInt(req.params.id);
    const productItem = productList.find((pItem) =>
    { return pItem.id === productCode})
    console.log(productItem);
    res.json(productItem); 
  })




//--CAM- get all inventory--//
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



app.get('/inventory', (req,res)=>{
    res.json(inventory)
})

app.post('/warehouses', (req, res) => {
    const newWarehouse = req.body;
    warehousesInfo.push(newWarehouse);
    res.json({ msg: 'You posted a new warehouse' })
    res.status(400).send('Oppsies');

})



app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}`)
})