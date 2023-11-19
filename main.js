noseX = 0;
noseY = 0;

function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.hide();

    canvas = createCanvas(700, 400);
    canvas.position(320,0);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) 
{
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + "noseY = " + noseY);
	}
}

function modelLoaded() {
	console.log("Model Loaded");
}

function draw(){
    image(video, 0, 0, 700, 400);
}

function onClick(){
    
}
