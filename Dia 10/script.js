fetch(`https://randomuser.me/api/`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.getElementById("parte5").innerHTML +=`
    <img id="img" src="${data.results[0].picture.large}">
    `
    document.getElementById("parte4").innerHTML+=`
    <p>${data.results[0].name.title}</p>
    `
})