/////the perlin noise waves in the moddle of the screen

function waves() {

    //////////////////        WAVES         ////////////////////
    ////// beginning of wave 0-BOTTOM - black middle shadow/////
    push();
    strokeWeight(random(0.5, 5));
    stroke(random(10, 5), 0, 0);
    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 100, 300); //mirroring 

        vertex(x, y + 100);
        xWave += 0.02;
    }
    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    /////////////////////////end of wave 0-BOTTOM////////////

    ///////////////////////////////////////////////////////
    ////// beginning of wave 1-BOTTOM - black middle shadow/////
    push();
    strokeWeight(random(0.5, 50));
    stroke(0, random(10, 50), 0, random(99, 100))
    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 100, 300); //mirroring 

        vertex(x, y + 80);
        xWave += 0.02;
    }
    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    /////////////////////////end of wave 1-BOTTOM////////////

    ///////////////////////////////////////////////////////

    ////////////// beginning of wave 2-BOTTOM///////////////
    push();
    strokeWeight(random(0.5, 40)); ////red shadow
    stroke(random(250, 255), 2, 5, random(10, 80));
    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 100, 300);

        vertex(x, y + 120);

        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    //////////////////end of wave 2-BOTTOM/////////////////

    //////////////////////////////////////////////////////

    ////////////// beginning of wave 3-BOTTOM///////////////
    push();
    strokeWeight(random(0.5, 3)); ////white
    stroke(random(250, 255), 250, 250, 250 - xTarget);
    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 100, 300);

        vertex(x, y + 120);

        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    //////////////////end of wave 3-BOTTOM/////////////////

    /////////////////beginning of wave 4-BOTTOM////////////////
    push();
    stroke(random(50, 255), 255, 255, random(80, 100));
    strokeWeight(random(0.2, 7)); ////blue

    beginShape();
    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {
        var y = map(noise(xWave, yWave), 0, 1, 100, 300);
        vertex(x, y + 105);
        xWave += 0.02;

    }

    yWave += 0.025;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();

    ///////////////end of wave 4-BOTTOM/////////////////

    ////////////////////////////////////////////////////

    ///////////////// beginning of wave 5-BOTTOM////////////
    push();
    strokeWeight(random(0.2, 20)); ////violet
    stroke(random(50, 255), 0, 255, random(90, 50));

    beginShape();
    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {
        var y = map(noise(xWave, yWave), 0, 1, 100, 300);
        vertex(x, y + 93);
        xWave += 0.02;

    }

    yWave += 0.025;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();

    //////////////////end of wave 5-BOTTOM//////////////////

    /////////////////////////////////////////////////////

    ////////////// beginning of wave 6-BOTTOM///////////
    push();
    strokeWeight(random(0.1, 9)); ////pink
    stroke(random(150, 255), 0, random(40, 100));

    //// polygon out of the wave points////
    beginShape();

    //// 2D Noise ////
    var xWave = 0;

    //// iterate over horizontal pixels ////
    for (var x = 0; x <= width; x += 5) {
        // calculate a y value according to noise, map to 

        //// 2D Noise
        var y = map(noise(xWave, yWave), 0, 1, 100, 300);

        //// the vertex ////
        //// changing the "y" value, the location of the wave changes on the "y" axis////    
        vertex(x, y + 100);


        //// increment "x" dimension for more noise ////
        xWave += 0.02;
    }
    //// increment "y" dimension for more noise ////
    yWave += 0.03;


    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    ///////////////////end of wave 0-BOTTOM//////////////////

    ///// beginning of wave 1-TOP - black middle shadow /////
    push();
    strokeWeight(random(0.2, 5));
    stroke(random(10, 50), 0, 0)
    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 300, 100); //mirroring 
        vertex(x, y - 10);
        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    /////////////////end of wave 0-TOP///////////////////

    ///////////////////////////////////////////////////////

    ///// beginning of wave 1-TOP - black middle shadow /////
    push();
    strokeWeight(random(50, 100));
    stroke(0, random(10, 50), 0, random(50, 100))
    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 300, 100); //mirroring 
        vertex(x, y + 40);
        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    /////////////////end of wave 1-TOP///////////////////

    /////////////////////////////////////////////////////

    /////////// beginning of wave 2-TOP  ///////////////
    push();
    strokeWeight(random(0.5, 7)); ////White
    stroke(255, random(80, 250), 200, 250 - xTarget)

    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 300, 100); //mirroring  
        vertex(x, y);

        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    ////////////////////end of wave 2-TOP////////////////////

    ////////////////////////////////////////////////////////

    ////////////// beginning of wave 3-TOP//////////////////
    push();
    strokeWeight(random(0.5, 10)); ////blue
    stroke(random(50, 55), random(200, 250), random(200, 250), random(50, 100));

    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 300, 100); //mirroring

        vertex(x, y + 0);

        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    ////////////////////end of wave 3-TOP///////////////

    ///////////////////////////////////////////////////

    /////////// beginning of wave 4-TOP///////////////
    push();
    strokeWeight(random(0.2, 5)); ///red
    stroke(random(250, 255), 0, random(10, 50));

    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 300, 100); //mirroring 
        vertex(x, y - 10);

        xWave += 0.021;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    ////////////////end of wave 4-TOP//////////////////

    ////////////////////////////////////////////////////

    ////////////////// beginning of wave 5-TOP//////////////////
    push();
    strokeWeight(random(0.5, 20));
    stroke(random(200, 255), random(2, 50), random(2, 20), random(20, 99));

    beginShape();

    var xWave = 0;

    for (var x = 0; x <= width; x += 5) {

        var y = map(noise(xWave, yWave), 0, 1, 300, 100);

        vertex(x, y - 20);

        xWave += 0.02;
    }

    yWave += 0.03;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();
    ////////////////////end of wave 5-TOP////////////////////////

    ///////////////////////////////////////////////////////

    /////////// END OF ALL WAVES////////////////////

}
