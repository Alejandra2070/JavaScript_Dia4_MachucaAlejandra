var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
var total = 0;
var deckId = "";

mostrarUrl(url);

function mostrarUrl(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
            document.getElementById("buttonNew").disabled = false;
        });
}

function nuevaCarta() {
    var linkDos = "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1";

    fetch(linkDos)
        .then(res => res.json())
        .then(cartas => {
            let crear = document.getElementById("imgs");
            let img = document.createElement("img");
            img.src = cartas.cards[0].image;
            crear.appendChild(img);

            total += calcularValor(cartas.cards[0].value);
            let mensaje = document.getElementById("mensaje");

            if (total === 21) {
                mensaje.innerText = "¡Felicidadessss, acabas de ganar :D!";
                document.getElementById("buttonNew").disabled = true;
                document.getElementById("buttonReset").style.display="inline-block";
            } 
            else if (total > 21) {
                mensaje.innerText = "Perdiste, te pasaste de 21 :(";
                document.getElementById("buttonNew").disabled = true;
                document.getElementById("buttonReset").style.display="inline-block";
            } 
            else {
                mensaje.innerText = "Tu total es " + total + ". Sigue jugando.";
            }
        });
}

function calcularValor(valor) {
    if (valor === "ACE") {
        return 11;
    }
    else if (["KING", "QUEEN", "JACK"].includes(valor)) {
        return 10;
    } 
    else {
        return parseInt(valor);
    }
}

function reintentarJuego() {
    total = 0;
    document.getElementById("imgs").innerHTML = "";
    document.getElementById("mensaje").innerText = "";
    document.getElementById("buttonNew").disabled = false;
    document.getElementById("buttonReset").style.display = "none";
    mostrarUrl(url);
}

function mostrarReglas(){
    var reglas = document.getElementById("reglas");
    if (reglas.style.display === "none") {
        reglas.style.display = "block";
    } else {
        reglas.style.display = "none";
    }
}