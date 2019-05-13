/*
Gabor Paszti - supernova above the field of poppies

gpasz001@gold.ac.uk
creative project - introduction to computational arts
the code for the projection
*/

////game of life variables
var w;
var columns;
var rows;
var board;
var next


////target variables
var xTarget;
var yTarget;
var xTargetSpeed;
var yTargetSpeed;
var rTargetX;
var rTargetY;


//// magnetic pins variables
var diameter;
var angle = 0;
var spacingX, spacingY, numX, numY, startX, startY;
var flock = [];


////waves variables
var yWave = 0;
var xWave = 0;


//// flock variables
var alignSlider, cohesionSlider, separationSlider;


////flover variables
var flower;
var poppies = [];


////// translation variables
var sliding = 800


function preload() {

    ////poppie No.2 is transparent - regulates the density
    poppies[0] = loadImage('poppies/Pipacs 2.png');
    poppies[1] = loadImage('poppies/Pipacs 2.png');
    poppies[2] = loadImage('poppies/Pipacs 2.png');
    poppies[3] = loadImage('poppies/Pipacs 3.png');
    //// the 3 poppies in the middle
    poppies[4] = loadImage('poppies/Pipacs 10.png');
    poppies[5] = loadImage('poppies/Pipacs 2.png');
    poppies[6] = loadImage('poppies/Pipacs 2.png');
    //// the 3  SHADOW - poppies in the middle
    poppies[7] = loadImage('poppies/Pipacs 0.png');
    poppies[8] = loadImage('poppies/Pipacs 2.png');
    poppies[9] = loadImage('poppies/Pipacs 2.png');

}


function setup() {
    //createCanvas(1624, 512);
    createCanvas(windowWidth, windowHeight);
    frameRate(120);


    //// target variables /////
    xTarget = 1;
    yTarget = random(255, 256);
    xTargetSpeed = 1;
    yTargetSpeed = 1;
    rTargetX = 20;
    rTargetY = 20;




    ///////////magnetic pins ///////
    ////change the density og the pins ////
    numY = 20
    numX = 32
    spacingX = (width) / numX;
    spacingY = (height / 2) / numY;
    startX = spacingX / 2;
    startY = spacingY / 2;



    ///// slider for flocking /////
    alignSlider = createSlider(0, 2, 0.1);
    alignSlider.hide();
    cohesionSlider = createSlider(0, 2, 0.1);
    cohesionSlider.hide();
    separationSlider = createSlider(0, 2, 1);
    for (var i = 0; i < 50; i++) {
        flock.push(new Boid());
        separationSlider.hide();
    }



    //////// game of life Grid ////////
    w = 20;
    columns = floor(width / w);
    rows = floor((height / 2) / w);
    board = new Array(columns);
    for (var i = 0; i < columns; i++) {
        board[i] = new Array(rows);
    }
    next = new Array(columns);
    for (i = 0; i < columns; i++) {
        next[i] = new Array(rows);
    }



} ///////////////end of setup////////////////




function draw() {

    background(0, 0, 0, 60);



    /////background() 2 - velevet purple
    push();
    strokeWeight(random(0.5, 2));
    stroke(random(250, 255), 0, 50, random(90, 100));
    fill(255, 100, 190, random(20, 5));
    rectMode(CENTER)
    rect(windowWidth / 2 + xTarget,
        windowHeight / 2,
        windowWidth - random(30, 100),
        windowHeight - random(30, 100));

    strokeWeight(random(0.5, 2));
    stroke(random(250, 255), 0, 50, random(90, 100));
    fill(255, 250, 0, 100);
    rect(0 + xTarget,
        windowHeight / 2,
        random(1, 5),
        windowHeight - random(30, 100))
    pop();




    ///////Poppies - background tapestry 
    push();
    translate(0, height - sliding);
    tapestry();
    pop();



    /////magnetic pins in draw ////
    push()
    translate(0, height - sliding);
    magneticPins();;
    pop();



    /////////game of life in draw ////////
    push()
    translate(0, height - sliding);
    generate();
    pop();

    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            if ((board[i][j] == 1)) {
                var poppie = random(poppies); ///randomize the poppie flow


                push();
                translate(0, height - (sliding));
                stroke(0, 0, 0)
                strokeWeight(2)
                fill(105, 200, 200, random(10, 90))
                rect(random(i * w, i * w + 2) + xTarget / 4,
                    random(j * w, j * w + (random(xTarget / 4, -xTarget / 4)) + 4),
                    w - 10,
                    w - 10);

                image(poppie,
                    i * w + xTarget / 4,
                    j * w + (random(xTarget / 4, -xTarget / 4)),
                    random(10, 70) + (random(xTarget / 40, xTarget / 60)),
                    random(10, 70) + (random(xTarget / 40, xTarget / 60)));


                pop();


            } else {

                noStroke();
                noFill();

            }

        }
    }






    /////////flocking initiation in draw//////
    push();
    translate(0, height - sliding);
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.draw();
    }
    pop();


    ////// the flame (target) and the leading central poppies ////
    push()
    translate(0, height - sliding);
    flame();
    pop();


    //////initialising the perlin 2D waves//////
    push()
    translate(0, height - sliding);
    waves();
    pop();





    //save("anim/image-"+frameCount+".png"); ////save PNG files

} //// end of draw function /////////



//////////////////////////////////////////////////
////////////  THE END ////////////////////////////
//////////////////////////////////////////////////
