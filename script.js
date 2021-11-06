const PlayerSelection = 'Rock'
const ComputerSelection = 'ComputerOutput'
let result 

const ComputerOutput= () => {
    const RandomNumber = (Math.floor(Math.random() * 3))
    if (RandomNumber == 0){
        return 'Rock'
    }
    else if  (RandomNumber == 1) {
        return 'Scissors'
    }
    else if (RandomNumber == 2) {
        return 'Paper'
    }

}


function PlayRound (PlayerSelection,ComputerSelection) {
    if (PlayerSelection == ComputerSelection) {
        result = 'Tie'    
    }
    else if (PlayerSelection == 'Scissors' && ComputerSelection == 'Paper'){
        result = 'You have won , Scissors beats Paper! :)'
    }
    else if (PlayerSelection == 'Scissors' && ComputerSelection == 'Rock'){
        result = 'You have lost, Scissors loses to Rock :('
    }
    else if (PlayerSelection == 'Rock' && ComputerSelection == 'Scissors'){
        console.log(PlayRound(PlayerSelection,ComputerSelection))
        result = 'You have won, Rock beats Scissors!:)'
    }
    else if (PlayerSelection == 'Rock' && ComputerSelection == 'Paper'){
        result = 'You have lost, Rock loses to Paper :('
    }
    else if (PlayerSelection == 'Paper' && ComputerSelection == 'Rock'){
        result = 'You have won, Paper beats Rock! :)'
    }
    else if (PlayerSelection == 'Paper' && ComputerSelection == 'Scissors'){
        result = 'You have lost, Paper loses to Scissors :('
    }
}

console.log(PlayRound(PlayerSelection,ComputerSelection))