song="";
leftwristX=0;
leftwristY=0;

rightwristX=0;
rightwristY=0;
function preload(){
song=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function  modelLoaded(){
console.log("PoseNet is loaded");
}
function gotPoses(results){
if (results.length>0){
console.log(results);
leftwristX = results[0].pose.leftWrist.x;
leftwristY = results[0].pose.leftWrist.y;
console.log("leftwristX"+leftwristX+"leftwristY"+leftwristY);

rightwristX = results[0].pose.rightWrist.x;
rightwristY = results[0].pose.rightWrist.y;
console.log("rightwristX"+rightwristX+"rightwristY"+rightwristY);
}
}

function draw(){
image(video,0,0,600,500);  
fill("#d40206");
stroke("#d40206");

circle(leftwristX,leftwristY,20);

InNumbers= Number(leftwristY);
withoutdecimel=floor(InNumbers);
volume=withoutdecimel/500;
document.getElementById("volume").innerHTML="VOLUME"+volume;
song.setVolume(volume);
}

function play(){
song.play();
song.rate(2.5);
song.setVolume(1);
}
