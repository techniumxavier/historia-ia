import { Dragger } from "./modules/dragger.js";

const interactiveLayer = document.getElementById('interactive-layer');  
const draggerSystem = new Dragger(interactiveLayer);

draggerSystem.startDraggerSystem();

