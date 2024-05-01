const obj1 = {
    number1:10,
    number2:40
};
function addNumbers(number3,number4){
    console.log(this.number1 + this.number2+ number3 + number4);
}
addNumbers.call(obj1,100,200);


addNumbers.apply(obj1,[100,200]);


function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj1);

console.dir(copyFunc1);

console.log(copyFunc1(100,200));