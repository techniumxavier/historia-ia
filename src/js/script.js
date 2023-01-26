let isDrawing = false;
let x = 0;
let y = 0;
let xTarget = 0;
let yTarget = 0;

//contentList
const interactiveLayer = document.getElementById('interactive-layer')


interactiveLayer.addEventListener('mousedown', (e)=>{
    e.preventDefault()
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    interactiveLayer.style.cursor = "move"
})


interactiveLayer.addEventListener('mousemove', (e) => {
    e.preventDefault()
    if (isDrawing) {
      xTarget = e.offsetX;
      yTarget = e.offsetY;
      let scrollX = this.scrollX;
      let scrollY = this.scrollY;
      let xDif = x - xTarget;
      let yDif = y - yTarget; 
      let moveX = (scrollX + xDif) < 0 ? 0 : scrollX + xDif;
      let moveY = (scrollY + yDif) < 0 ? 0 : scrollY + yDif;
      scroll(moveX, moveY)
    }
});

  
window.addEventListener('mouseup', (e) => {
    e.preventDefault()
      if (isDrawing) { 
      isDrawing = false;
      interactiveLayer.style.cursor = "default"
    }
});


function centralizeScreen(){
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const contentHeight = interactiveLayer.clientHeight;
  const contentWidth = interactiveLayer.clientWidth;
  
  scrollTargetX = (contentWidth - viewportWidth)/2;
  scrollTargetY = (contentHeight - viewportHeight)/2;

  window.scroll(scrollTargetX, scrollTargetY);
}








function getContentsFilteredsByTypes(data, types){
  const contents = data.timeline
  const filteredContents = contents.filter(content => types.includes(content.tipo))
  return filteredContents
}



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

const contentList = contents.sort(compare)




let currentLanguage = 'en'

const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')


button1.addEventListener('click', () => {
  currentLanguage = 'pt'
  updateContentCard()
})

button2.addEventListener('click', () => {
  currentLanguage = 'en'
  updateContentCard()
})

button3.addEventListener('click', () => {
  currentLanguage = 'es'
  updateContentCard()
})


let contentIndex = 0;

function updateContentCard(){

  const titlePage = document.getElementById('title-page')

  if(currentLanguage == 'en'){
    titlePage.innerHTML = 'The History of AI'
  } else if (currentLanguage == 'pt'){
    titlePage.innerHTML = 'A História da IA'
  } else if (currentLanguage == 'es'){
    titlePage.innerHTML = 'La historia de la IA'
  }

  const spikes = document.getElementsByClassName('spike-h2')
  for(let i = 0; i < spikes.length; i++){
    if(currentLanguage == 'en'){
      spikes[i].innerHTML = contentList[i].título.en;
    } else if (currentLanguage == 'pt') {
      spikes[i].innerHTML = contentList[i].título.pt;
    } else if (currentLanguage == 'es') {
      spikes[i].innerHTML = contentList[i].título.es;
    }
  }
  
  currentData = contentList[contentIndex]
  if(currentLanguage == 'en'){
    contentTitle.innerHTML = currentData.título.en;
    contentAuthor.innerHTML = currentData.autores.en;
    contentSummary.innerHTML = currentData.resumo.en;
    contentImportance.innerHTML = currentData.importância.en;
    contentYear.innerHTML = currentData.data_ano;
  } else if (currentLanguage == 'pt') {
    contentTitle.innerHTML = currentData.título.pt;
    contentAuthor.innerHTML = currentData.autores.pt;
    contentSummary.innerHTML = currentData.resumo.pt;
    contentImportance.innerHTML = currentData.importância.pt;
    contentYear.innerHTML = currentData.data_ano;
  } else if (currentLanguage == 'es') {
    contentTitle.innerHTML = currentData.título.es;
    contentAuthor.innerHTML = currentData.autores.es;
    contentSummary.innerHTML = currentData.resumo.es;
    contentImportance.innerHTML = currentData.importância.es;
    contentYear.innerHTML = currentData.data_ano;
  }

}

const contentTitle = document.getElementById('content-title')
const contentAuthor = document.getElementById('content-author')
const contentSummary = document.getElementById('content-summary')
const contentImportance = document.getElementById('content-importance')
const contentYear = document.getElementById('content-year')


for (let i = 0; i < 23; i++){
  const station = document.getElementById(`station-${i + 1}`);
  station.addEventListener('click', () => {
    contentIndex = i
    currentData = contentList[i]
    if(currentLanguage == 'en'){
      contentTitle.innerHTML = currentData.título.en;
      contentAuthor.innerHTML = currentData.autores.en;
      contentSummary.innerHTML = currentData.resumo.en;
      contentImportance.innerHTML = currentData.importância.en;
      contentYear.innerHTML = currentData.data_ano;
    } else if (currentLanguage == 'pt') {
      contentTitle.innerHTML = currentData.título.pt;
      contentAuthor.innerHTML = currentData.autores.pt;
      contentSummary.innerHTML = currentData.resumo.pt;
      contentImportance.innerHTML = currentData.importância.pt;
      contentYear.innerHTML = currentData.data_ano;
    } else if (currentLanguage == 'es') {
      contentTitle.innerHTML = currentData.título.es;
      contentAuthor.innerHTML = currentData.autores.es;
      contentSummary.innerHTML = currentData.resumo.es;
      contentImportance.innerHTML = currentData.importância.es;
      contentYear.innerHTML = currentData.data_ano;
    }
  })
}


centralizeScreen()
updateContentCard()