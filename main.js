right_wirst = 0;
left_wrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(650, 650);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#808080');
    document.getElementById("text_side").innerHTML = "Fornt Size of the Text is =" + difference + "px";
    textSize(difference);
    fill("#42f5da");
    text('ABC', 50, 400);
}
function modelLoaded() {
    console.log("model is loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wirst);
        console.log("Left wirst = " + left_wrist + "Right wrist = " + right_wrist + "Difference = " + difference);
    }
}