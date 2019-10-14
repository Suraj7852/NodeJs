const util = require('../Utility/utility');
var result = util.ReadFile('../Files/Stock.json'); 
    var total = 0;
    console.log("Sl No  Stock Name    No. of Share   Share price      value");
    console.log("-----------------------------------------------------------");
    for(let i=0;i<result.Stock.length;i++)
    {
        var stock = (result.Stock[i].share)*(result.Stock[i].value)
        total += stock;
        console.log(`${i+1}      ${result.Stock[i].name}             ${result.Stock[i].share}             ${result.Stock[i].value}      ${stock}`);
    }
    console.log("----------------------------------------------------------");
    console.log("TOtal value of stocks: "+total);
