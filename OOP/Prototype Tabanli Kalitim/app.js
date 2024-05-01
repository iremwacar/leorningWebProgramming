function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function () {
    console.log("Isim:" + this.name + "Yas:" + this.age);
}
const person = new Person("irem",21);
console.log(person);

function Employee(name,age,salary){
    this.name = name;
    this.age = age ;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
Employee.prototype.showInfos = function(){
    console.log("Isim:" + this.name + "Yas:" + this.age + "Maas:" + this.salary);
}

const emp = new Employee("irem",21,35000);
console.log(emp);
emp.showInfos();
console.log(emp.toString());