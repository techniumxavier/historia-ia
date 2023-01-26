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


/* function identifySquares(){
    const squares = document.getElementsByClassName('square')

    const squaresLenght = squares.length

    const xOffset = Math.floor(squaresLenght/2)

    for(let i = 0; i < squares.length; i++){
        squares[i].style.top = `calc(${19} * 50px)`
        squares[i].style.left = `calc(${49 - xOffset + i} * 50px)`
    }
} */


/* const contents = getContentsFilteredsByTypes(data, ['artigo', 'invenção'])

function compare( a, b ) {
    if ( a.data_ano < b.data_ano ){
        return -1;
    }
    if ( a.data_ano > b.data_ano ){
        return 1;
    }
    return 0;
}

const contentList = contents.sort(compare) */







function generateElements(){

    let htmlContent = ""

    for(let i = 0; i < contentList.length; i++){

        htmlContent = htmlContent + `
        <!-- Estação ${i + 1} -->
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${10 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${11 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${12 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${13 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
    
    
        <div class="spike-text" style="top: calc(11 * 50px); left: calc(${14 + i*9} * 50px + 25px);">
            <h2 class="spike-h2">${contentList[i].título.original}</h2>
        </div>
        <div id="station-${i + 1}" class="square station" style="top: calc(15 * 50px); left: calc(${14 + i*9} * 50px);">
            <img src="./imgs/checkpoint.svg" alt="">
        </div>
    
    
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${15 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${16 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${17 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
        <div class="square rail" style="top: calc(15 * 50px); left: calc(${18 + i*9} * 50px);">
            <img src="./imgs/trilho_reto.svg" alt="">
        </div>
    
    
        <div class="year" style="top: calc(17 * 50px); left: calc(${11 + i*9} * 50px);">
            <h6>${contentList[i].data_ano}</h6>
        </div>`;

    }

    console.log(htmlContent)






}