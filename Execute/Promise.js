let CleanRoom = new Promise((resolve,reject)=>{

    let isClean = false;
    if(isClean)
        resolve("clean");
    else
        reject("Not clean");
});

CleanRoom.then(function(fromResolve){
    console.log("Room is "+fromResolve);
}).catch(function(fromReject){
    console.log("Room is "+fromReject);
    
})