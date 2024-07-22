const canvas =  document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
let x = 0;
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 2;
const spriteAnimations = [];
const animationsState = [
    {name: 'idle', frames: 7},
    {name: 'jump', frames: 7},
];
animationsState.forEach((state, index) => {
    let frames = {
        loc: [],
    };
    for(let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY =  index *spriteHeight;
        let frame = {x: positionX, y: positionY};
        frames.loc.push(frame);
    }
    spriteAnimations[state.name] = frames;
});
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['idle'].loc.length;
    let frameX = spriteWidth*position;
    let frameY = spriteAnimations['idle'].loc[position].y;
    frameX = position*spriteWidth;
    ctx.drawImage(playerImage, frameX, frameY*spriteHeight, spriteWidth,spriteHeight, 0,0, spriteWidth, spriteHeight);

    
    
    gameFrame++;
    requestAnimationFrame(animate);
}   

animate();