song="";
function preload() {
   song=loadSound("Harry Potter Theme Song.mp3") ;
}
function setup() {
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();
}
function draw() {
image(video,0,0,350,350);
}
function start() {
    song.play();
}
function pause() {
    song.pause();
}
function stop() {
    song.stop();
}