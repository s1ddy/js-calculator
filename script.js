

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


function PlayRound (PlayerSelection, ComputerSelection) {
    if (PlayerSelection == ComputerSelection) {
        return 'Tie'    
    }
    else if (PlayerSelection == 'Scissors' && ComputerSelection == 'Paper'){
        return  'You have won , Scissors beats Paper! :)'
    }
    else if (PlayerSelection == 'Scissors' && ComputerSelection == 'Rock'){
        return 'You have lost, Scissors loses to Rock :('
    }
    else if (PlayerSelection == 'Rock' && ComputerSelection == 'Scissors'){
        return  'You have won, Rock beats Scissors!:)'
    }
    else if (PlayerSelection == 'Rock' && ComputerSelection == 'Paper'){
        return 'You have lost, Rock loses to Paper :('
    }
    else if (PlayerSelection == 'Paper' && ComputerSelection == 'Rock'){
        return 'You have won, Paper beats Rock! :)'
    }
    else if (PlayerSelection == 'Paper' && ComputerSelection == 'Scissors'){
        return 'You have lost, Paper loses to Scissors :('
    }
}

const PlayerSelection = prompt("What do you choose");
const ComputerSelection = ComputerOutput();


function Game() {
    console.log(PlayRound(PlayerSelection,ComputerSelection))
    console.log(PlayRound(PlayerSelection,ComputerSelection))
    console.log(PlayRound(PlayerSelection,ComputerSelection))
    console.log(PlayRound(PlayerSelection,ComputerSelection))
    console.log(PlayRound(PlayerSelection,ComputerSelection))
}

console.log(Game())