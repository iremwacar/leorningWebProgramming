function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfos = function () {
    console.log("Isim:" + this.name + "Yas:" + this.age + "Maas:" + this.salary);
}
const emp = new Employee("irem",21,35000);
console.log(emp);



class Employee2{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos2(){
        console.log("Isim:" + this.name + "Yas:" + this.age + "Maas:" + this.salary);
    }
}

const emp2 = new Employee2("irem",21,35000);