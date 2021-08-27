song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
score_right=0;
song_status="";
song2_status="";
function preload() {
   song=loadSound("Harry Potter Theme Song.mp3") ;
   song2=loadSound("Ruth B. - Lost Boy.mp3") ;
}
function setup() {
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",got_poses);
}
function draw() {
image(video,0,0,500,500);
song_status=song.isPlaying();
song2_status=song2.isPlaying();
fill("red");
stroke("blue");
if(score_right>0.2){
    circle(rightWristX,rightWristY,40);
    song2.stop();
}
if(song_status==false){
    song.play();
    document.getElementById("song_name").innerHTM="playing Harry Potter";
}
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
    score_right=results[0].pose.keypoints[10].score;
    console.log(score_right);
    }
}