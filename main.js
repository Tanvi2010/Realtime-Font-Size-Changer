function setup() {
    canvas=createCanvas(650,650);
    canvas.position(900,100);
video=createCapture(VIDEO);
video.position(200,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
word=document.getElementById("word");
console.log(word);
nosex=0;
nosey=0;
    
function draw() {
    if (word="") {
        word="word";
    }
    background("#8fdfd6");
    textSize(100);
    fill("#f5bed2");
    text(word,nosex,nosey);


}

function modelLoaded() {
   console.log("model has loaded"); 
}
function gotPoses(results) {
  if(results.length>0)  {
      console.log(results);
      nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
  }
}

