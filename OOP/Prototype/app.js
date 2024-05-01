const object = new Object();
const object2 = new Object();
object.name="irem";
console.log(object);

function Employee(name, age){
    this.name = name;
    this.age = age;
    this.showInfos = function (){
        console.log("Bilgiler gosteriliyor...");
    }
}
Employee.prototype.show = function(){
    console.log("Isim:" + this.name + "Yas:" + this.age);
}
const emp1 = new Employee("irem",21);
console.log(emp1);
console.log(emp1.toString());
