import React from 'react'; 
//components 
import CanvasPost from "../components/CanvasPost";

const Mock_Data = [{
    imageAlt:"", 
    imageSrc:"", 
    userDisplayName:"",

}];

function Dashboard() {
    //display all the posts 
    return(
        <div className="PageWrapper">
            <h1>Dashboard</h1>
            {Mock_Data.map((canvas, i) =>(
            
            <CanvasPost canvas={canvas} key={i} />
            ))}
        </div>
    )
}

export default Dashboard; 