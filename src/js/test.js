const board = document.getElementById('board')


function createTable(){
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
}



//createTable()


function identifySquares(){
    const squares = document.getElementsByClassName('square')

    const squaresLenght = squares.length

    const xOffset = Math.floor(squaresLenght/2)

    for(let i = 0; i < squares.length; i++){
        squares[i].style.top = `calc(${19} * 50px)`
        squares[i].style.left = `calc(${49 - xOffset + i} * 50px)`
    }
}




//identifySquares()
//createTable()   
//centralizeScreen()


const contents = getContentsFilteredsByTypes(data, ['artigo', 'invenção'])

function compare( a, b ) {
    if ( a.data_ano < b.data_ano ){
        return -1;
    }
    if ( a.data_ano > b.data_ano ){
        return 1;
    }
    return 0;
}

const k = contents.sort(compare)