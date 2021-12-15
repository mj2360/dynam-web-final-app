import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReactP5Wrapper } from "react-p5-wrapper";
import AddPostForm from '../components/AddPostForm'; 

const baseUrl = 'http://localhost:4000';


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
      if (strkWait === maxStrk){
        pos0neg = -1; 
      }
  
      prevMouseX = p5.mouseX;
      prevMouseY = p5.mouseY;
  
      }
  
      
    };
  };


function AddPost ({userInformation}) {
    let navigate = useNavigate();
    function submitForm(e) {
        e.preventDefault();

        const text = e.currentTarget.text.value; 
        const imageSrc = e.currentTarget.imageSrc.value;
        const imageAlt = e.currentTarget.imageAlt.value; 
        const userId = userInformation.uid; 
        const userName = userInformation.displayName;

        console.log({text, imageSrc, imageAlt, userId, userName})

        const url = `${baseUrl}/create?text=${text}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&userId=${userId}&userName=${userName}`
         axios
           .get(url)
           .then(function (response) {
               console.log({response})
                navigate('/', { replace: true });
           })
           .catch(function (error) {
             console.warn(error);
           });
       }

        return(
        //pass the p5 saveCanvas function
        <div className="PageWrapper">
            <h1>Add Post</h1> 
            <ReactP5Wrapper sketch={sketch} />
            <button className="red">Red</button>
            <button className="blue">Blue</button>
            <button className="green">Green</button>
            <button className="save">Save</button>
            {/* pass the p5save canvas function from drawingCanvas */}
            <AddPostForm submitForm={submitForm}/> 
        </div>
    )

}

export default AddPost; 