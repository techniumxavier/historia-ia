const board = document.getElementById('board')


for (let i = 0; i < 40; i++){

    for (let j = 0; j < 100; j++){
        const squareDiv = document.createElement('div')
        squareDiv.classList.add('square')
        squareDiv.style.top = `calc(${i} * 50px)`;
        squareDiv.style.left = `calc(${j} * 50px)`;
        squareDiv.innerHTML = `L:${i + 1} <br> C:${j + 1}`
        board.appendChild(squareDiv)
    }

}