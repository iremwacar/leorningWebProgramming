document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://v6.exchangerate-api.com/v6/e92a2ef79ac0cb9b5c7828f8/latest/USD",true);


    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount*rate;
            console.log(amount*rate);
        }
    }

    xhr.send();
}