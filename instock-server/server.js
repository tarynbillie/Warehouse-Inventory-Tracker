const express = require('express');
const xpress = express(); 
const invList = require('./data/InventoryDataXList');

console.log(invList);

xpress.get('/warehouse/001', (req, res) => {
    // const wareHouseidprovided = (req.params.id);
    const wareHouseidprovided = '001';
    const invSublist = invList.filter((invItem) => 
    { return invItem.warehouseID  === wareHouseidprovided})
    console.log(invSublist);
    res.json(invSublist); 
})

  xpress.listen(8080, () => {
    console.log('server is listening on 8080')
  })