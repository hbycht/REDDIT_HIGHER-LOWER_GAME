/// <reference path="../../TSDef/p5.global-mode.d.ts" />


// TEMPLATES
let drawingParams = {

  reactToForces: true,

  defaultAngle: 270,

  forceSpacing: 40,

  increment: 0.3,

  showForces: !true,

  circleSpawner: !true,
  pendulum: !true,

  particleSpeed: 5,

  attachToForces: 0.0,

  particleSize: 1.0,

  numParticles: 1000,

  particleColorBegin: 255,
  
  particleColorEnd: 345,

  background: 5,

  backgroundAlpha: 10,

  
};


/* ###########################################################################
Classes
############################################################################ */
let particles = [];
var changed = true;
var paramQ = 0;
var preParamQ = 1;
var looop = true;
let minDimension = Math.min(window.innerWidth, window.innerHeight);
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

let colors;


/* ###########################################################################
Functions
############################################################################ */
function drawForce(xPos, yPos, dir, pow) {
  push();
  translate(xPos, yPos);
  rotate(dir);
  
  fill(0, 100, 100, 100);
  ellipse(0, 0, 3);
  
  strokeWeight(0.1);
  stroke(255);
  line(0, 0, pow, 0);

  pop();
}

function initParticles() {

  colors = [
    // "#08cebd",
    "#ee8460",
    "#7d83e5",
    "#0724e3",
  ];

  let randomScale = random(1 / 2, 2);

  particles = [];
  for (n = 0; n < drawingParams.numParticles; n++) {
    var x = random(width);
    var y = random(height);

    particles.push({
      col: random(colors),
      xPos: x,
      yPos: y,
      preX: x,
      preY: y,
      rot: null,
      speed: drawingParams.particleSpeed * randomScale,
      size: drawingParams.particleSize * (1 / randomScale)
    })
  }
}

function drawParticle(p, forces) {

  drawingParams.attachToForces = sin(frameCount * 1) / 2 + 0.5;

  push();

  // draw particle
  stroke(p.col);
  strokeWeight(p.size);
  line(p.xPos, p.yPos, p.preX, p.preY);

  // check if on canvas
  if (p.xPos > - p.size && p.xPos < window.innerWidth + p.size && p.yPos > - p.size && p.yPos < window.innerHeight + p.size) {
    // move particle
    p.preX = p.xPos;
    p.preY = p.yPos;
    p.xPos += cos(p.rot) * p.speed;
    p.yPos += sin(p.rot) * p.speed;
  } 
  else {
    //*// reborn particle
    if(drawingParams.circleSpawner) {
      // circle spawner
      let sAngle = (millis() / 1) % 360;
      if (drawingParams.pendulum) {
        var sRad = minDimension * 0.4 * sin(millis() / 100);
        ellipse(sRad + midX, midY, 10);
      } else {
        var sRad = minDimension * 0.4;
      }

      p.xPos = cos(sAngle) * sRad + midX;
      p.yPos = sin(sAngle) * sRad + midY;

    } 
    else {
      // random spawner
      p.xPos = random(width);
      p.yPos = random(height);
    }

    let randomScale = random(1 / 2, 2);

    p.col = random(colors);
    p.preX = p.xPos;
    p.preY = p.yPos;
    p.rot = null;
    p.speed = drawingParams.particleSpeed * randomScale;
    p.size = drawingParams.particleSize * (1 / randomScale);
  }

  pop();

  // check which forces are the nearest
  let nearestForce = [[Infinity, 0]]; // Save the 4 nearest forces into an array
  let nearestForceRot = 0;
  let nearestForceWeights = 0;
  forces.forEach(f => {
    let distance = dist(f.xPos, f.yPos, p.xPos, p.yPos);
    for(let i = 0; i < nearestForce.length; i++) {
      if (distance < nearestForce[i][0]) {
        nearestForce.splice(i, 0, [distance, f.rot]);
        break;
      }
    }
    if (nearestForce.length > 4) nearestForce.splice(4, 1); // Max. 4 forces in the array
  });

  // Calculate weighted mean of forces
  let maxDistToForce = sqrt(2) * drawingParams.forceSpacing;
  for(let i = 0; i < nearestForce.length; i++) {
    let weight = maxDistToForce - nearestForce[i][0];
    let rot = nearestForce[i][1];
    nearestForceRot += rot * weight;
    nearestForceWeights += weight;
  }
  nearestForceRot /= nearestForceWeights;

  // refresh particles rotation to new value
  if(p.rot === null) {
    p.rot = nearestForceRot;
  }
  else {
    p.rot = lerp(p.rot, nearestForceRot, drawingParams.attachToForces);
  }

  if(!drawingParams.reactToForces) p.rot = drawingParams.defaultAngle;
}

function drawFlowfield() {
  // FORCES
  let forces = [];
  let forceSpacing = drawingParams.forceSpacing;
  let forcePower = drawingParams.forcePower;
  let rows = floor(height / forceSpacing);
  let columns = floor(width / forceSpacing);
  let xOff = (width - columns * forceSpacing) / 2;
  let yOff = (height - rows * forceSpacing) / 2;
  let inc = drawingParams.increment;

  // PARTICLES
  let numParticles = drawingParams.numParticles;
  let size = drawingParams.particleSize;

  // TIME
  let timeShift = millis() / 10000;

  // Check changes in drawingParams
  paramQ = width + height + numParticles;
  changed = paramQ == preParamQ ? false : true;

  // INIT PARTICLES & reset canvas stats if drawingParams changed
  if (changed || keyIsPressed && key == 'r') {
    initParticles();

    minDimension = min(width, height);
  }


  background(drawingParams.background, drawingParams.backgroundAlpha);

  // REFRESH & SHOW FORCES
  for (let j = 0; j <= rows; j++) {
    let fY = j * forceSpacing + yOff;
    for (let i = 0; i <= columns; i++) {
      let fX = i * forceSpacing + xOff;
      let fRot = (noise(i * inc, j * inc, timeShift) * 2 - 1) * 360 + 360;

      forces.push({
        xPos: fX,
        yPos: fY,
        rot: fRot,
        power: forcePower
      });

      if (drawingParams.showForces) {
        drawForce(fX, fY, fRot, forcePower);
      }
    }
  }

  // REFRESH & DRAW PARTICLES
  particles.forEach(particle => {
    drawParticle(particle, forces);
  });


  preParamQ = paramQ;
}

// Copy in p5.setup()
function setup() {

  // INIT PARTICLES
  initParticles();
}


// Copy in p5.draw()
function draw() {

  // execute Flowfield function
  drawFlowfield();
}
