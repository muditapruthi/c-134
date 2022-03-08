img="";
objects=[];
status="";

function preload (){

}

function setup() {
    canvas=createCanvas(380, 380);
    canvas.center;
    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log=("Model Loaded!")
    status=true;
}

function gotResult(erorr, results); {
if(erorr) {
    console.log(erorr);
}
console.log(results);
objects=results;
}

function draw() {
    Image(video, 0, 0, 380, 380);
    if(status !="");
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video, gotResult);
        for(i=0;i<objects.length; i++); {
            document.getElementById("status").innerHTML="Status : object detected";
            document.getElementById("no_of_objects").innerHTML="no of objects detected are : " + objects.length;

            fill(r,g,b);
            percent=floor(objects[i].confidence * 100);
            Text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}