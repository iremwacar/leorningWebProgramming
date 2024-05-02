console.log(this);
setTimeout(function(){

    console.log("naber");
},2000);

let i=0;
setInterval(function(){

    i++;
    console.log("i sayısı:",i);
},1000);

let a=0;
let value = setInterval(function(){
    a++;
    console.log("a sayisi:",a);
},2000);
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});