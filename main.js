song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload() {
   song=loadSound("Harry Potter Theme Song.mp3") ;
}
function setup() {
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",got_poses);
}
function draw() {
image(video,0,0,350,350);
}
function start() {
    song.play();
    song.setVolume(0.6);
    song.rate(1.0);
}
function pause() {
    song.pause();
}
function stop() {
    song.stop();
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function got_poses(results){
    if(results.length>0){
        console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log(leftWristX);
    console.log(leftWristY);
    console.log(rightWristX);
    console.log(rightWristY);
    }
}