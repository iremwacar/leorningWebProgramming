let number1 , number2;

arr = [100, 200, 300, 400];

[number1, number2] = arr;
console.log(number1,number2);
 
const [num1, num2] = arr;
console.log(num1,num2);



const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
const {a:n1, c:n2, e:n3} = numbers;
console.log(n1,n2,n3);



const getLangs = () => ["Phyton","Java","C++"];
const [leng1,leng2,leng3] = getLangs();
console.log(leng1,leng2,leng3) 


const person = {
    firstName:"irem acar",
    year:2003,
    salary:35000,
    showInfos : () => console.log("Bilgiler gösteriliyor...")
}
const {firstName:isim,year:yil,salary:maas,showInfos:bilgi} = person ;
console.log(isim,yil,maas);
bilgi();