function magneticPins() {
    //////// magnetic pins engine ///////
    push();
    rectMode(CENTER);

    for (var x = 0; x < numX; x++) {
        for (var y = 0; y < numY; y++) {
            var locX = startX + spacingX * x;
            var locY = startY + spacingY * y;

            push();

            translate(locX, locY);
            var angle = atan2(yTarget - locY, xTarget - locX);
            rotate(angle); ////towards the mouse
            //rotate(angle + radians(90));   ////away from
            //translate(random(-50,-250),0); ///push appart - add on X to push more
            //translate(-50, 0);
            translate(random(-60, -50), 0);
            //translate(50,0);  ///pull towards

            push();

            //// flactuating fill
            var opacity;
            opacity = sin(-250 + xTarget / 3) * 100

            //// 1st layer - Pins
            stroke(250, 20, 0, xTarget / 5 - opacity);
            fill(random(200, 255), -80 + xTarget / 2, random(190, 210), opacity / 1.5);
            rect(0, 0, 40, 5);
            rect(0, 0, 0.55, 5)

            //// 2nd layer - Pins 
            push();
            stroke(255, 20, 0, xTarget / 15 - opacity);
            fill(random(200, 235), -80 + xTarget / 2, random(170, 190), opacity / random(4, 6));
            rect(0, 0, (sin(rTargetX) * random(2, 3000)), 2);
            rect(0, 0, 5, 0.5);
            pop();



            ////rect in the rect - line throughthe pins  
            //rect(0, 0, 0.5, 5);
            pop();

            pop();
        }
    }

    pop();

}
