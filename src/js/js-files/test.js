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

/*     for(let i = 0; i < contentList.length; i++){ */

    for(let i = 0; i < 2; i++){

        htmlContent = htmlContent + `
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





function generateStations(){
    let htmlContent = '';
    
    for(let i = 0; i < 23; i ++){
        htmlContent = htmlContent + 
        `
            <div id="station-${i + 1}" class="square station" style="top: calc(15 * 50px); left: calc(${14 + i*9} * 50px);">
                <img src="./imgs/checkpoint.svg" alt="">
            </div>
        `;
    }

    console.log(htmlContent)

}







function generateElements2() {

    let htmlContent  = '';

    for(let i = 0; i < 39; i++){

        if(i < 28){
            htmlContent = htmlContent +
            ` 
            <div class="station-unity" style="  left: calc(0 * 50px); top: calc(30 * 50px); ">
                <div class="square long-rail" style="bottom: calc(0 * 50px); left: calc(0 * 50px);"></div>
    
                <div id="station-${i + 1}" class="square station" style="bottom: calc(0 * 50px); left: calc(4 * 50px);">
                    <img src="./imgs/checkpoint.svg" alt="">
                </div>
                
                <div class="spike-text" style="bottom: calc(1 * 50px); left: calc(1 * 50px);">
                    <h2 class="spike-h2">${data.timeline[i].título.original}</h2>
                    <div class="spike-line"></div>
                </div>
    
                <div class="square long-rail" style="bottom: calc(0 * 50px); left: calc(5 * 50px);"></div>
            </div>`;
        } else {
            htmlContent = htmlContent +
            `
            <div class="ai-winter-unity" style="  left: calc(0 * 50px); top: calc(30 * 50px);">
                <div class="square long-rail" style="bottom: calc(0 * 50px); left: calc(0 * 50px);"></div>

                <div class="spike-text" style="bottom: calc(1 * 50px); left: calc(1 * 50px);">
                    <h2 class="spike-h2">${data.timeline[i].título.original}</h2>
                    <div class="spike-line"></div>
                </div>

                <div id="station-${i + 1}" class="square station" style="bottom: calc(0 * 50px); left: calc(3 * 50px);"></div>

                <div class="square long-rail" style="bottom: calc(0 * 50px); left: calc(6 * 50px);"></div>

            </div>
            `
        }

        console.log(htmlContent)

    }

}