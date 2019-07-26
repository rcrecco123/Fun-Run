let spritesheet;
let spriteData;

function preload() {
    spriteData = loadJSON("/Users/Ronald_Crecco/Desktop/Fun Run JS Project/gengar.json");
    spritesheet = loadImage("/Users/Ronald_Crecco/Desktop/Fun Run JS Project/graphics/Sprite Sheets/Characters/gengar sprite sheet.png");
}

function setup() {
    createCanvas(640, 480);
    console.log(spriteData);
}

function draw() {
    background(0);
    Image(spritesheet, 0, 0);
}