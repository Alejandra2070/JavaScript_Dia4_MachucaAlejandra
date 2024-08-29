document.getElementById("boton").addEventListener("click",getData);
function getData(){
    fetch("https://superheroapi.com/api.php/aeddac726bf2761ccc114a431c250adb/powerstats")
    .then(res=> res.json())
    .then(data => {
        console.log(data[0]["powerstats"]);

        let output = "";

        data.forEach(function(user){
            output += `<li>${user.response}</li>`
        });

        document.getElementById("output").innerHTML = output;
    })
}

getData()