
// Movimentação da página
let isDrawing = false;
let x = 0;
let y = 0;
let xTarget = 0;
let yTarget = 0;

const interactiveLayer = document.getElementById('interactive-layer')

interactiveLayer.addEventListener('mousedown', (e)=>{
    e.preventDefault()
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    interactiveLayer.style.cursor = "grab"
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
      interactiveLayer.style.cursor = "grab"
    }
});


function centralizeScreen(){
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const contentHeight = interactiveLayer.clientHeight;
  const contentWidth = interactiveLayer.clientWidth;
  
  const scrollTargetX = (contentWidth - viewportWidth)/2;
  const scrollTargetY = (contentHeight - viewportHeight)/2;

  window.scroll(scrollTargetX, scrollTargetY);
}



//Obtendo dados fitlrados
/* function getContentsFilteredsByTypes(data, types){
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

const contentList = contents.sort(compare) */

const contentList = data.timeline;




//Trabalhando com atualização do conteúdo e configurações de linguagem
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
  const textFooterDesktop = document.getElementById('text-footer-desktop')
  const textFooterMobile = document.getElementById('text-footer-mobile')

  const line1 = document.getElementById('line-1');
  const line2 = document.getElementById('line-2');
  const line3 = document.getElementById('line-3');
  const line4 = document.getElementById('line-4');


  //Atualizando os textos do footer, o título da página e o nome das linhas
  if(currentLanguage == 'en'){
    titlePage.innerHTML = 'The History of AI';
    textFooterDesktop.innerHTML = 'Created and maintained by <a href="https://technium.me/" target="_blank">technium.me</a>. The History of AI. Jan 27 Version. Free Preview. We are working to be the largest collection in the history of artificial intelligence. Your <a href="" target="_blank">feedback</a> will help us improve. Always in beta.';
    textFooterMobile.innerHTML = 'Created and maintained by <a href="https://technium.me/" target="_blank">technium.me</a>. Your <a href="" target="_blank">feedback</a> will help us improve.';
    line1.innerHTML = 'Artificial Intelligence Backbone';
    line2.innerHTML = 'Biological conditioning theory';
    line3.innerHTML = 'Optimization theory';
    line4.innerHTML = 'Reinforcement learning theory';

  } else if (currentLanguage == 'pt'){
    titlePage.innerHTML = 'A História da IA'
    textFooterDesktop.innerHTML = 'Criado e mantido pela <a href="https://technium.me/" target="_blank">technium.me</a>. A História da IA. Versão de 27 de janeiro. Visualização gratuita. Estamos trabalhando para ser a maior coleção da história da inteligência artificial. Seus <a href="" target="_blank">comentários</a> nos ajudarão a melhorar. Sempre em beta.';
    textFooterMobile.innerHTML = 'Criado e mantido pela <a href="https://technium.me/" target="_blank">technium.me</a>. Seus <a href="" target="_blank">comentários</a> nos ajudarão a melhorar.'
    line1.innerHTML = 'Espinha Dorsal da Inteligência Artificial';
    line2.innerHTML = 'Teoria do condicionamento biológico';
    line3.innerHTML = 'Teoria da otimização';
    line4.innerHTML = 'Teoria do aprendizado por reforço';
  } else if (currentLanguage == 'es'){
    titlePage.innerHTML = 'La historia de la IA'
    textFooterDesktop.innerHTML = 'Creado y mantenido por <a href="https://technium.me/" target="_blank">technium.me</a>. La historia de la IA. Versión del 27 de enero. Vista previa gratuita. Estamos trabajando para ser la colección más grande en la historia de la inteligencia artificial. Tu <a href="" target="_blank">recomendación</a> nos ayudará a mejorar. Siempre en beta.';
    textFooterMobile.innerHTML = 'Creado y mantenido por <a href="https://technium.me/" target="_blank">technium.me</a>. Tu <a href="" target="_blank">recomendación</a> nos ayudará a mejorar.'
    line1.innerHTML = 'Columna Vertebral de la Inteligencia Artificial';
    line2.innerHTML = 'Teoría del condicionamiento biológico';
    line3.innerHTML = 'Teoría de la optimización';
    line4.innerHTML = 'Teoría del aprendizaje por refuerzo';
  }


  //Atualizando os indicadores de conteúdo
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
  
  //Atualizando o texto do card
  currentData = contentList[contentIndex]
  if(currentLanguage == 'en'){
    contentTitle.innerHTML = currentData.título.en;
    //Autores
    try {
      contentAuthor.innerHTML = currentData.autores.en;
    } catch {
      contentAuthor.innerHTML = ''
    }
    //Resumo
    contentSummary.innerHTML = currentData.resumo.en;
    //Importância
    try {
      contentImportance.innerHTML = currentData.importância.en;
    } catch {
      contentImportance.innerHTML = currentData.importancia.en;
    }
    //Ano
    contentYear.innerHTML = currentData.data_ano;
  } else if (currentLanguage == 'pt') {
    //Título
    contentTitle.innerHTML = currentData.título.pt;
    //Autor
    try {
      contentAuthor.innerHTML = currentData.autores.pt;
    } catch {
      contentAuthor.innerHTML = ''
    }
    //Resumo
    contentSummary.innerHTML = currentData.resumo.pt;
    //Importância
    try {
      contentImportance.innerHTML = currentData.importância.pt;
    } catch {
      contentImportance.innerHTML = currentData.importancia.pt;
    }
    //Ano
    contentYear.innerHTML = currentData.data_ano;
  } else if (currentLanguage == 'es') {
    //Título
    contentTitle.innerHTML = currentData.título.es;
    //Autor
    try {
      contentAuthor.innerHTML = currentData.autores.es;
    } catch {
      contentAuthor.innerHTML = ''
    }
    //Resumo
    contentSummary.innerHTML = currentData.resumo.es;
    //Importância
    try {
      contentImportance.innerHTML = currentData.importância.es;
    } catch {
      contentImportance.innerHTML = currentData.importancia.es;
    }
    //Ano
    contentYear.innerHTML = currentData.data_ano;
  }







}

const contentTitle = document.getElementById('content-title')
const contentAuthor = document.getElementById('content-author')
const contentSummary = document.getElementById('content-summary')
const contentImportance = document.getElementById('content-importance')
const contentYear = document.getElementById('content-year')


//Gerando gatilhos de eventos para cada um dos pontos de interação do mapa
for (let i = 0; i < 39; i++){
  const station = document.getElementById(`station-${i + 1}`);
  station.addEventListener('click', () => {
    document.getElementById('content-card').style.display = 'inline';
    contentIndex = i
    currentData = contentList[i]
    if(currentLanguage == 'en'){
      //Título
      contentTitle.innerHTML = currentData.título.en;
      //Autor
      try {
        contentAuthor.innerHTML = currentData.autores.en;
      } catch {
        contentAuthor.innerHTML = ''
      }
      //Resumo
      contentSummary.innerHTML = currentData.resumo.en;
      //Importância
      try {
        contentImportance.innerHTML = currentData.importância.en;
      } catch {
        contentImportance.innerHTML = currentData.importancia.en;
      }
      //Ano
      contentYear.innerHTML = currentData.data_ano;
    } else if (currentLanguage == 'pt') {
      //Título
      contentTitle.innerHTML = currentData.título.pt;
      //Autor
      try {
        contentAuthor.innerHTML = currentData.autores.pt;
      } catch {
        contentAuthor.innerHTML = ''
      }
      //Resumo
      contentSummary.innerHTML = currentData.resumo.pt;
      //Importância
      try {
        contentImportance.innerHTML = currentData.importância.pt;
      } catch {
        contentImportance.innerHTML = currentData.importancia.pt;
      }
      //Ano
      contentYear.innerHTML = currentData.data_ano;
    } else if (currentLanguage == 'es') {
      //Título
      contentTitle.innerHTML = currentData.título.es;
      //Autor
      try {
        contentAuthor.innerHTML = currentData.autores.es;
      } catch {
        contentAuthor.innerHTML = ''
      }
      //Resumo
      contentSummary.innerHTML = currentData.resumo.es;
      //Importância
      try {
        contentImportance.innerHTML = currentData.importância.es;
      } catch {
        ontentImportance.innerHTML = currentData.importancia.es;
      }
      //Ano
      contentYear.innerHTML = currentData.data_ano;
    }
  })
}

//Executando funções necessárias do sistema

function fixMobileIssue(){
  headContent = '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />'
  
  const mobileMeta = document.createElement('meta')
  mobileMeta.setAttribute("name", "viewport")
  mobileMeta.setAttribute("content", "width=device-width, initial-scale=1.0, user-scalable=no")
  
  const head = document.getElementsByTagName('head')
  head[0].appendChild(mobileMeta)
  
}

fixMobileIssue()
centralizeScreen()
updateContentCard()
closeContentCard()


//Manipulação mobile
const buttonCloseContent = document.getElementById('button-close-content');
buttonCloseContent.addEventListener('click', () => {
  closeContentCard()
})

function closeContentCard() {
  document.getElementById('content-card').style.display = 'none'
}




const IL_DEFAULT_WIDTH = 20000;
const IL_DEFAULT_HEIGHT = 3000;

let scale = 1

addEventListener('wheel', (event) => {
  
  const board = document.getElementById('board');
  const interactiveLayer = document.getElementById('interactive-layer');
  
  
  if(event.ctrlKey){
    event.preventDefault()
    
    scale += event.deltaY * -0.0005;
    scale = Math.min(Math.max(.125,scale), 4);
    
    const boardTopOffset = ((scale - 1) / 0.0625) * 47;
    const boardLeftOffset = ((scale - 1) / 0.0625) * 375;
    
    board.style.transform = `scale(${scale})`;

    
    if(scale * IL_DEFAULT_HEIGHT < IL_DEFAULT_HEIGHT){
      interactiveLayer.style.width = `${IL_DEFAULT_WIDTH}px`;
      interactiveLayer.style.height = `${IL_DEFAULT_HEIGHT}px`;
    } else {
      interactiveLayer.style.width = `${scale * IL_DEFAULT_WIDTH}px`;
      interactiveLayer.style.height = `${scale * IL_DEFAULT_HEIGHT}px`;
      board.style.top = `${boardTopOffset}px`
      board.style.left = `${boardLeftOffset}px`
    }
    
    document.getElementById('scale-info').innerHTML = `${scale.toFixed(2)} X`


    
    
    
    const stations = document.getElementsByClassName('station')
    
    
    board.style.zIndex = 'initial'
    for (let i = 0; i < stations.length; i++){
      stations[i].style.zIndex = '70'
    }
    interactiveLayer.style.zIndex = 'initial'
    


    
    
  }
}, {passive: false})

