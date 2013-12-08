// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     ||  
    function( callback ){
      return window.setTimeout(callback, 1000 / 60);
    };
})();

//Set a width and length equal to full screen
var W = window.innerWidth;
var H = window.innerHeight;

//Initialize canvas and required variables
var canvas = document.getElementById("canvas"),
    particles = [],
    ball = {},
    paddles = [2];

//Set canvas to full screen
canvas.width = W;
canvas.height = H;
var ctx = canvas.getContext("2d");

//Color the canvas black
ctx.fillRect(0, 0, W, H);

//Ball object
ball = {
  x: 50,
  y: 50,
  r: 5,
  c: "blue",
  vx: 4,
  vy: 8,

//Function to draw the ball on the canvas
  draw: function() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    ctx.fill();
  }
};

//Paddle "class" that creates the paddles
function Paddle(position) {
//Height & width  
  this.h = 5;
  this.w = 150;
//paddles' position
  this.x = W/2 - this.w/2;
  this.y = (position == "top") ? 0 : H - this.h;
}

//Populate the paddles array with 2 new paddles
paddles.push(new Paddle("bottom"));
paddles.push(new Paddle("top"));

//Drawing everything on the canvas
function paintCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H);
}

function draw() {
  paintCanvas();
  for(var i = 0; i < paddles.length; i++) {
    p = paddles[i];
    ctx.fillStyle = "white";
    ctx.fillRect(p.x, p.y, p.w, p.h);
  }

  ball.draw();
}

draw();