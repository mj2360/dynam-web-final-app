import React from 'react'; 
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {
  let prevMouseX; 
  let prevMouseY;

  let r; 
  let g; 
  let b;

  let buttonRed, buttonBlue, buttonGreen, buttonSave; 

  let maxStrk = 8; 
  let minStrk = 1; 
  let strkWait = maxStrk; 
  let pos0neg = -1;


  p5.setup = () => {
    p5.createCanvas(1140, 600);
    p5.background(250);

    buttonRed = p5.select(".red");
    buttonBlue = p5.select(".blue");
    buttonGreen = p5.select(".green");
    buttonSave = p5.select(".save");

    buttonRed.mousePressed(makeRed); 
    buttonBlue.mousePressed(makeBlue); 
    buttonGreen.mousePressed(makeGreen); 
    buttonSave.mousePressed(saveCanvas); 
  }

  function makeRed () {
    r=250; 
    g=0; 
    b=0;
  }

  function makeBlue () {
    r=0; 
    g=0; 
    b=250;
  }

  function makeGreen () {
    r=0; 
    g=250; 
    b=0;
  }

  function saveCanvas () {
    p5.saveCanvas();
  }

  p5.draw = () => {

    if(p5.mouseIsPressed) {
    p5.stroke(r, g , b); 
   
    p5.line(prevMouseX, prevMouseY, p5.mouseX, p5.mouseY);

    p5.strokeWeight(strkWait);
    strkWait = strkWait + 0.5*pos0neg; 

    if(strkWait <= minStrk){
      pos0neg = 1; 
    }
    if (strkWait == maxStrk){
      pos0neg = -1; 
    }

    prevMouseX = p5.mouseX;
    prevMouseY = p5.mouseY;

    }

    
  };
};

//pass the p5 saveCanvas function
function drawingCanvas( ) {
    return(
        <div className="PageWrapper">
            <ReactP5Wrapper sketch={sketch} />
            <button className="red">Red</button>
            <button className="blue">Blue</button>
            <button className="green">Green</button>
            <button className="save">Save</button>
        </div>
    )
}

export default drawingCanvas; 