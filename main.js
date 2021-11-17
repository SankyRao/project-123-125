function preload() {

}

noseX = 0;
noseY = 0;
difference = 0;
lwX = 0;
rwX = 0;

function setup() {
    canvas = createCanvas(500, 300)
    video = createCapture(VIDEO)
    video.size(300, 300)
    canvas.position(500, 150)
    posenet = ml5.poseNet(video, loadedmodel)
    posenet.on('pose', result)
}



function loadedmodel() {

    console.log("Pose Net Has Been Initialized")

}

function result(saveresult) {
    if (saveresult.length > 0) {
        console.log(saveresult)

        noseX = saveresult[0].pose.nose.x
        noseY = saveresult[0].pose.nose.y
        rwX = saveresult[0].pose.rightWrist.x
        lwX = saveresult[0].pose.leftWrist.x
        difference = floor(lwX - rwX)
    }

}

function draw() {
    background("grey")
    fill("#EE4040 ")
    stroke("black")
    textSize(difference)
    text("Thank You",noseX-100,noseY)
}