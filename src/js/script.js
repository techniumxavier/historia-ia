let isDrawing = false;
let x = 0;
let y = 0;
let xTarget = 0;
let yTarget = 0;



//const interactiveLayer = document.getElementById('display-screen')
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
      //console.log(moveX, moveY)
    }
  });
  
  
  window.addEventListener('mouseup', (e) => {
    e.preventDefault()
      if (isDrawing) { 
        //x = 0;
        //y = 0;
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