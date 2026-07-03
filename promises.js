function savetodb(data){// here function declare
    
return new Promise((resolve, reject) =>{ //here we give our code to promises
let internetspeed  =  Math.floor(Math.random()*10) + 1;
if(internetspeed>4){
    resolve("Success : data was saved");
}else{
    reject ("Failure : weak connection");
}
    });
}

savetodb("apna college")
.then((result) =>{
console.log("data1 saved");
console.log("result of promise",result);
return savetodb('hllo monti');
})
.then((result) =>{
    console.log('data2 saved');
    console.log("result of promise",result);
    return savetodb("shradha")
})
.then((result) =>{
    console.log("data3 saved");
    console.log("result of promise",result)
})
.catch((error) =>{
console.log("promise was rejected");
console.log("result of promise",error);
});
