async function test(data){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Bu bir degerdir...");
        },5000);
    });
    let response = await Promise;
    
    return response;


}
test("Merhaba").then(response => console.log(response));


async function testData(data){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof data ==="string"){
                resolve(data);
            }
            else{
                reject(new Error("Lütfen string bir deger girin..."));
            }
        },5000);
    });

    const response = await promise;
    return response;
}
testData("thriller")
.then(data => console.log(data))
.catch(err => console.log(err));




async function getCurrency(url){
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

getCurrency("https://api.exchangeratesapi.io/lates")
.then(response=> console.log(response));