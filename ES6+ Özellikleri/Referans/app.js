//primity
let a = "Irem";
let b = "Acar"

if( a === b ){
    console.log("esit");
}
else{
    console.log("esit degildir")
}

//referans
let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];
if(array1 === array2){
    console.log("esit");
}
else{
    console.log("esit degildir")
}


const person1 = {
    name :"Irem",
    age:21
}
const person2 = {
    name: "Irem",
    age:21
}

if(person1 === person2){
    console.log("esit");
}
else{
    console.log("esit degildir")
}


const cities = new Map();
const key =[1,2,3];
cities.set("Izmir",35);
cities.set("Istanbul",34);
cities.set(key,"Array");

console.log(cities.get("Izmir"));
console.log(cities.get(key));