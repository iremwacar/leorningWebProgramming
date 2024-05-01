const person = {
    name:"Irem Acar",
    age:21,
    salary:35000
};

const langs = ["Phyton","Java","C++","php"];

const name = "irem";

for(let prop in person){
    console.log(prop,person[prop]);
}

for(let index in langs){
    console.log(index,langs[index]);
}

for(let index in name){
    console.log(index,name[index]);
}


//cannot navigate over the object
//for(let value of person){}

for(let value of langs){
    console.log(value);
}

for(let character of name){
    console.log(character);
}