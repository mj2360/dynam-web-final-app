import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
//components 
import CanvasPost from "../components/CanvasPost";


const url = 'http://localhost:4000';


function Dashboard() {
    const [canvases, setCanvases] = useState(); 
//Get all Canvases
    useEffect(() => {

           axios
           .get(url)
           .then(function (response) {
               console.log({response})
             setCanvases(response.data);
           })
           .catch(function (error) {
             // handle error
             console.warn(error);
           });
       }, []); 
    //display all the posts 
    return(
        <div className="PageWrapper">
           {canvases && canvases.map((canvas, i) => <CanvasPost canvas={canvas} key={i} />)} 
        </div>
    )
}

export default Dashboard; 