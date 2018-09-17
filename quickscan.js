var canv;
var vid;
var Button;
var Button2;
var Mark;
var pTag;


function setup()
{
    canv = createCanvas(400,490);
    canv.position(900,110);
    vid = createCapture(VIDEO);
    vid.position(120,100);

    Button = createButton("Capture");
    Button.position(120,590);
    Button.size(640,50);
    Button.mouseClicked(makeMark);




}

function draw()
{
}

function makeMark()
{
  fill(204,0,0);
  ellipse(300,100,40,40);
  ellipse(120,170,40,40);
  createP("A list of diseases/pathologies will appear here");


  Button2=createButton("Call 911");
  Button2.position(1400,300);
  Button2.size(100 , 100);
}
