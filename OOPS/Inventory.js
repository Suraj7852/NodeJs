const fs = require('fs');
fs.readFile('Inventory.json',(err,data)=>{
    if (err) throw err;
    let val = JSON.parse(data);
    console.log("Cost of Rice: ");
    let riceCost = (val.Inventory_Data[0].Rice.weight)*(val.Inventory_Data[0].Rice.price_pr_kg);
    console.log(riceCost);
    console.log("Cost of pulses: ");
    let pulCost = (val.Inventory_Data[1].pulses.weight)*(val.Inventory_Data[1].pulses.price_pr_kg);
    console.log(pulCost);
    console.log("Cost of wheats: ");
    let whCost = (val.Inventory_Data[2].wheats.weight)*(val.Inventory_Data[2].wheats.price_pr_kg);
    console.log(whCost);
})