//Difficult
const merhaba=function(){
    console.log("merhaba");
}

merhaba();

const merhaba2 = () => {
    console.log("merhaba");
}
merhaba2();

const merhaba3 = (name) => {
    console.log("Merhaba ", name );
}
merhaba3("irem");

//ıt's shorter
const merhaba4 = name4 => console.log("Merhaba",name4);
merhaba4("irem"); 


const cube = function(x){
    return x*x*x;
}
console.log(cube(4));
//ıt's shorter
const cubeshort = x => x*x*x;
console.log(cubeshort(4));