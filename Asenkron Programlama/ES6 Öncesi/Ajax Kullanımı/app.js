document.getElementById("btn").addEventListener("click",function(){
    //XMLHttpRequest
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.onreadystatechange = function(){
        console.log(this.readyState);
    }

    xhr.onreadystatechange = function(){
        console.log(this.status);
    }

    xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            console.log(this.responseText);
        }
    }
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    xhr.onprogress = function (){
        console.log("Process işleniyor...",this.readyState)
    }

    xhr.open("GET","example.txt",true);

    xhr.send();
});