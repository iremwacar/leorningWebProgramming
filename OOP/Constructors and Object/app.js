const emp1 = {
    name: "Irem",
    age:21,
    showInfos:function(){console.log("bilgi gosteriliyor.");}
};
const emp2 = {
    name: "Ibrahim",
    age:24
}
emp1.salary = 35000;
console.log(emp1);

function Employee(){
    this.name = "irem";
}
const emp3 = new Employee();
console.log(emp3);

function Employee2(name, age,salary){
    this.name = name;
    this.age = age;
    this.salary =salary;
    this.showFonk = function(){
        console.log(this.name, this.age, this.salary);
    }
}

const emp4 = new Employee2("irem",21,35000);
const emp5 = new Employee2("ibrahim",24,50000);

emp4.showFonk();
emp5.showFonk();