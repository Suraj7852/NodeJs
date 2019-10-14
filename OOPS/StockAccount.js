class Account{
    constructor()
    {
        this.name;
        this.share;
        this.price;
    }
}
const fs = require('fs');
const input = require('readline-sync');
fs.readFile('StockAccount.json',(err,data)=>{
    if(err) throw err;
    var result = JSON.parse(data);
    function display()
    {
        console.log("company Name      No. of Share         Share price");
        console.log("-----------------------------------------------------");
        for(let i=0;i<result.Account.length;i++)
        {
            console.log(`${result.Account[i].name}                ${result.Account[i].share_count}                   ${result.Account[i].share_price}`)
        }
    }
    display();
    var acc = new Account();
    acc.this.name = "Suarj";
})

