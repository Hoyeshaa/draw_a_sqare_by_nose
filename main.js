function setup(){
    canvas = createCanvas(450 , 450);
    canvas.position(560,150);

    camera1 = createCapture(VIDEO);
    camera1.size(550,500)

    pose = ml5.poseNet(camera1 , modelLoaded);
    pose.on('pose' , gotPoses);

}

x = 0;
y = 0;

function gotPoses( results){

    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        leftx = results[0].pose.leftWrist.x;
        rightx = results[0].pose.rightWrist.x;
        difference = floor(leftx - rightx);
    }
}

function modelLoaded(){
    console.log("Model is loaded");
}

function draw(){
    background("#008899");
    fill("pink")
    stroke("black")
    square(x , y , difference)
    document.getElementById("size").innerHTML = "the size of the square is " + difference + "px";
}
difference = 0;
leftx = 0;
rightx = 0;
