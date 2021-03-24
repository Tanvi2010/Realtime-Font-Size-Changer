function setup() {
    canvas = createCanvas(650, 650);
    canvas.position(900, 100);
    video = createCapture(VIDEO);
    video.position(200, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
nosex=0;
nosey=0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function draw() {
    word = document.getElementById("name").value;
    console.log(word);
    background("#8fdfd6");
    fill("#f5bed2");
    stroke("#f5bed2");
    textSize(difference);
    text(word,nosex,nosey);
    document.getElementById("size").innerHTML = "text-size:" + difference + "px";
}

function modelLoaded() {
    console.log("model has loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(rightwristx - leftwristx);
        console.log("leftwrist=" + leftwristx + "rightwrist=" + rightwristx + "difference=" + difference);
    }
}