export class Dragger {

    _isDragging = false;
    _x = 0;
    _y = 0;
    _xTarget = 0;
    _yTarget = 0;
    _interactiveLayer;

    constructor(interactiveLayer){
        this._interactiveLayer = interactiveLayer;
    }

    startDraggerSystem() {

        this._interactiveLayer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this._x = e.offsetX;
            this._y = e.offsetY;
            this._isDragging = true;
            this._interactiveLayer.style.cursor = 'grab';
            console.log('clicou');
        });

        this._interactiveLayer.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if (this._isDragging) {
                this._xTarget = e.offsetX;
                this._yTarget = e.offsetY;
                const scrollX = window.scrollX;
                const scrollY = window.scrollY;
                const xDif = this._x - this._xTarget;
                const yDif = this._y - this._yTarget;
                const xScroll = (scrollX + xDif) < 0 ? 0 : scrollX + xDif;
                const yScroll = (scrollY + yDif) < 0 ? 0 : scrollY + yDif;
                scroll(xScroll, yScroll);
                console.log('arrastou')
            }
        });

        window.addEventListener('mouseup', (e) => {
            e.preventDefault();
            if (this._isDragging) {
                this._isDragging = false;
                this._interactiveLayer.style.cursor = 'grab';
                console.log('soltou')
            }
        });
    }    
}