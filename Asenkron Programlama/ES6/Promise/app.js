function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Olumlu sonuc");
        },10000);
    });

}
console.log(getData("Merhaba"));
getData("Merhaba").then(function(response){
    console.log(response);
});

getData("Merhaba").catch(function(err){
    console.log(err);
})

function getData2(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("Olumsuz sonuc");
        },10000);
    });

}
console.log(getData2("Merhaba2"));