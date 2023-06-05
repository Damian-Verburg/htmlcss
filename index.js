var prices = ['GTA San Andreas' = 28.00, 'GTA 4' = 20.00, 'GTA V' = 45.00]
var games = []

function storeData(data) {
    console.log(data.textContent);
    alert('item is toegevoegd!')    
    games.push(data.textContent)
    console.log(games)
}

function checkout() {
    console.log('goed zo')
}