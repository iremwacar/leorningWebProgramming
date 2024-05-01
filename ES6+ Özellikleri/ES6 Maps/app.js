let myMap =  new Map();
console.log(myMap);

const key1 = "irem";
const key2 = {a:10, b:20};
const key3 = () => 2;

myMap.set(key1, "Stringb deger");
myMap.set(key2,"object literal deger");
myMap.set(key3,"function deger");

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);
console.log(myMap.size);



const cities = new Map();
cities.set("Izmir",35);
cities.set("Istanbul",34);
cities.set("Ankara",6);

cities.forEach(function(value,key) {
    console.log(key, value);
});

for(let value of cities){
    console.log(value);
}

for(let [key,value] of cities){
    console.log(key,value);
}

for(let key of cities.keys()){
    console.log(key);
}

for(let value of cities.values()){
    console.log(value);
}


//Array Map
const array = [["key1","value1"],["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap);


const cities2 = new Map();
cities2.set("Izmir",35);
cities2.set("Istanbul",34);
cities2.set("Ankara",6);

const array2 =Array.from(cities2);
console.log(array2);
