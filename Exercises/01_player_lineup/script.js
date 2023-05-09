const players = []


function addPlayer() {
    const playerName = document.getElementById('playerName')
    const position = document.getElementById('playerPosition')
    const number = document.getElementById('playerNumber')

    const player = {
        'name': playerName.value,
        'position': position.value,
        'number': number.value
    }
    
    players.push(player)


    listPlayer()

    playerName.value = ""
    position.value = ""
    number.value = ""

}


function listPlayer() {
    const table = document.getElementById('tbody')

    table.innerText =''
    
    for(let i = 0; i < players.length; i++) {
        const tr = document.createElement('tr')
        const tdPlayer = document.createElement('td')
        const tdPosition = document.createElement('td')
        const tdNumber = document.createElement('td')
        
        tdPlayer.innerText = players[i].name
        tdPlayer.className = 'align-left'
        tdPosition.innerText = players[i].position
        tdNumber.innerText = players[i].number

        table.appendChild(tr)
        tr.append(tdPlayer,tdPosition,tdNumber)
    }
}


function removePlayer() {
    const promptNumber = prompt('Inform player number: ')
    for(let i = 0; i < players.length; i++) {

        if (promptNumber == players[i].number) {
            
            players.splice(i,1)
            listPlayer()
        }
    }
}

