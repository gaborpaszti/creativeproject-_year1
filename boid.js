class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 6;


    }
    //////here Im adding constraint to the movement /////
    edges() {

        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }


        /////version 2
        if (this.position.y <= random(0, 100) || this.position.y >= random(512, 512 - 100)) {
            this.velocity.y = this.velocity.y * -6
        }

        ////only for full screen version
        if (this.position.y >= 512) {
            this.position.y = 510
        }



    }


    align(boids) {
        var perceptionRadius = 25;
        var steering = createVector();
        var total = 0;
        for (var other of boids) {
            var d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && d < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    separation(boids) {
        var perceptionRadius = 24;
        var steering = createVector();
        var total = 0;
        for (var other of boids) {
            var d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && d < perceptionRadius) {
                var diff = p5.Vector.sub(this.position, other.position);
                diff.div(d * d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesion(boids) {
        var perceptionRadius = 50;
        var steering = createVector();
        var total = 100;
        for (var other of boids) {
            var d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids) {
        var alignment = this.align(boids);
        var cohesion = this.cohesion(boids);
        var separation = this.separation(boids);

        alignment.mult(alignSlider.value());
        cohesion.mult(cohesionSlider.value());
        separation.mult(separationSlider.value());

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    draw() {
        push();
        stroke(255, random(80, 180), 0, random(20, 100));
        fill(20, 200, 200); ////add , 100 alpha for less contrast of the flock color
        rect((xTarget + random(200, 100)) - this.position.x,
            this.position.y,
            3 * cos(radians(frameCount + 50)) * random(1000, 500),
            sin(radians(frameCount)) * 3);

        pop();
    }
}
