noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getPoses);
}
function preload() {
    
}
function draw(){
background("#969A97");
document.getElementById("square_side").innerHTML = "Width and Height will be = " + difference + "px";
fill("#F90093");
stroke("#F90093");
square(noseX,noseY,difference);
}
function modelloaded() {
    console.log("PoseNet Initialized");
}
function getPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = "+noseX+"nose y ="+noseY);
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.yx
    difference = floor(leftwristX - rightwristX);
console.log("rightwrist ="+rightwristX+"left wrist ="+leftwristX+"difference ="+difference);

}
}

