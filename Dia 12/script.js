document.getElementById("añadir").addEventListener("click", añadirCarta)
/*document.getElementById("listo").addEventListener("click", contarCartas)*/
var url="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
mostrarUrl(url)
function mostrarUrl(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var otro = data.deck_id
        var linkDos="https://deckofcardsapi.com/api/deck/"+String(otro)+"/draw/?count=2";

        fetch(linkDos)
        .then(res => res.json())
        .then(cartas=> {
            /*console.log(cartas.cards[0].image)*/
            let crear = document.getElementById("imgs");
            crear.innerHTML=`
            <img id="img1" src=${cartas.cards[0].image}>
            `
        });
        
    })
}
function añadirCarta(){
    crear.innerHTML=`
    <img id="img1" src=${cartas.cards[0].image}>
    `
}
/*function añadirCarta(){
    
}
function contarCartas(){

}*/