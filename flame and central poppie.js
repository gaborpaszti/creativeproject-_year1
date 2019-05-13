function flame(){
    
    /////the TARGET's engine for its movement - rect(), Source Flame, Leading Poppies/////
    ////Leading Poppie
    push();
    imageMode(CENTER)
    rectMode(CENTER)

    /////top poppie
    ////// the color shadow
    stroke(100, 255, 30, 60)
    //fill(50,255,50)
    rect(370 + xTarget / 10, 130, random(170, 160), 160)
    /////shadow
    image(poppies[7], 370 + xTarget / 10, 130, random(170, 160), 160)
    /////full
    image(poppies[4], xTarget + 300, yTarget - 130, (190 - xTarget / 7) + PI, (190 - xTarget / 7) + PI)


    /////middle poppie
    ////// the color shadow
    stroke(100, 255, 30, 60);
    rect(100 + xTarget / 80, 260, random(260, 250), 260);
    /////shadow
    image(poppies[7], 100 + xTarget / 90, 260, random(270, 260), 270);
    /////full
    image(poppies[4], xTarget - 20, yTarget, (290 - xTarget / 7) + PI, (290 - xTarget / 7) + PI);


    /////buttom poppie
    ////// the color shadow
    stroke(100, 255, 30, 60)
    rect(280 + xTarget / 40, 380, random(120, 110), 120)
    /////shadow
    image(poppies[7], 280 + xTarget / 50, 380, random(120, 110), (120))
    /////full 
    image(poppies[4], xTarget + 180, yTarget + 130, (120 - xTarget / 7) + PI, (120 - xTarget / 7) + PI)
    pop();



    push();
    stroke(200, random(180, 250), 0, 100)
    fill(255, 0, 220, 99)
    rect(xTarget - 10, yTarget - 8, rTargetX * 2, rTargetY / 2)

    stroke(250, 255, 0, 70)
    fill(0, 255, 255, 100)
    rect(xTarget, yTarget, rTargetX * 2, rTargetY / 2)

    //// neon yellow - green flame - middle
    fill(100, 200, 100, 70)
    rect(xTarget - 70, yTarget + 6, rTargetX * sin(radians(rTargetX)), rTargetY / 4)


    //////twins 1
    stroke(250, 255, 0, 100)
    fill(250, 255, 0, 80)
    rect(xTarget - 15, yTarget + 8, rTargetX * 7, -(sin(rTargetX + PI) * xTarget) / 2)
    //////twins 2
    fill(250, 255, 0, 100)
    rect(xTarget - 50, yTarget + 8, -(sin(rTargetX + PI) * xTarget) / 2 + xTarget / 1.5, rTargetX / 3)

    ///// Upper yellow reflection
    stroke(250, 255, 0, 100)
    fill(250, 255, 0, 50)
    rect(xTarget % 3 + 500, yTarget - 160, -(sin(rTargetX + PI) * xTarget) / 2 + xTarget / 1.5, rTargetX / 5)

    stroke(250, 255, 0, 80)
    fill(255, 0, 20, random(70, 99))
    rect(xTarget + 3, yTarget + 2, rTargetX * 2, rTargetY / 2)

    stroke(250, 255, 0, 80)
    fill(200, 0, 0, 80)
    rect(xTarget + 10, yTarget + 8, rTargetX * 3, rTargetY / 1.5)



    ///////// Flame moving logic and form//////
    ////the smooth motion of the flame
    xTarget = xTarget * (sin(radians(frameCount))) + random(80, 110);
    ///////  speed of the flame
    xTarget += xTargetSpeed * 5;

    //// Version 3
    if (xTarget > random(900, 1000) - rTargetX || xTarget < random(-30, -90)) {

        xTargetSpeed = -xTargetSpeed++
    }


    pop();
    ///////end of flame moving logic and leading poppies//////



////////////// TOP LAYER - POPPIES ////////////
    /////// adding an extra layer of poppies, which fade in & out
    if (100 / random(1, 16) >= 10) {
        push();
        imageMode(CENTER)
        rectMode(CENTER)

        /////top poppie
        /////the color shadow
        stroke(100, 255, 30, 60)
        rect(370 + xTarget / 10, 130, random(170, 160), 160)
        ////full
        image(poppies[4], xTarget + 300, yTarget - 130, (190 - xTarget / 7) + PI, (190 - xTarget / 7) + PI)

        /////middle poppie
        /////the color shadow
        stroke(100, 255, 30, 60);
        rect(100 + xTarget / 80, 260, random(260, 250), 260);
        /////full
        image(poppies[4], xTarget - 20, yTarget, (290 - xTarget / 7) + PI, (290 - xTarget / 7) + PI);

        /////buttom poppie
        /////the color shadow
        stroke(100, 255, 30, 60);
        rect(280 + xTarget / 40, 380, random(120, 110), 120);
        /////full 
        image(poppies[4], xTarget + 180, yTarget + 130, (120 - xTarget / 7) + PI, (120 - xTarget / 7) + PI);

        pop();
    }

 

}