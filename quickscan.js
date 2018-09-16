var canv
var vid
var Button
var Green
var mousePressed
var img

function setup()
{
    canv = createCanvas(550,480);
    canv.position(770,100);
    vid = createCapture(VIDEO);
    vid.position(120,100);

    Button = createButton("Capture");
    Button.position(120,590);
    Button.size(640,50);
    Button.mouseClicked();
}

function mouseClicked()
{
  loadImage("FemaleBody.png")
}
