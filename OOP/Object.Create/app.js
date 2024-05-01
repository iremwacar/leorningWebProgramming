const obj = {
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}
console.log(obj);

const emp = Object.create(obj);
emp.name ="Irem";
emp.age = 21;
console.log(emp);





function Person(){

}
Person.prototype.text1 = function(){
    console.log("Text 1");
}
Person.prototype.text2 = function(){
    console.log("Text 2");
}
const person = new Person();
console.log(person);


function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

const emp2 = new Employee("irem",21);
emp2.text1;