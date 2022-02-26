function preload(){}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(300,180);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,180,130,280,200);
    fill(217, 147, 100);
    stroke(0, 0, 0);
    circle(150,110,50);
    circle(150,350,50);
    circle(485,110,50);
    circle(485,350,50);
    fill(120, 41, 41);
    stroke(120, 41, 41);
    rect(175,100,285,20);
    rect(175,340,285,20);
    rect(140,135,20,190);
    rect(476,135,20,190);
}
function takesnapshot(){
    save("filter.png");
}