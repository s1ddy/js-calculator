
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

console.log(ComputerOutput())