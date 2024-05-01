class Matematik {
    cube(x){
        console.log(x*x*x);
    }
}
const math = new Matematik();
math.cube(3);

class Matematik2 {
    static cube2(x){
        console.log(x*x*x);
    }
}
Matematik2.cube2(3);