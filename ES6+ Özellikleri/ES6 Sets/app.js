const mySet = new Set();
mySet.add(100);
mySet.add(100);
mySet.add("irem");
mySet.add(1,14);
mySet.add([1,2,3]);

console.log(mySet);

const mySet2 = new Set([100,3.14,"irem"]);
console.log(mySet2);

console.log(mySet.size);

mySet.delete("irem");
console.log(mySet);

console.log(mySet2.has("irem"));

mySet.forEach(function (value) {
    console.log(value);
});

for(let value of mySet){
    console.log(value);
}

const array = Array.from(mySet);
console.log(array);