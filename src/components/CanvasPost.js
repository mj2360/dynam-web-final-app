import React from 'react'; 


function CanvasPost ({ canvas }) {
    return (
        <div className="CanvasWrapper">
            <div className="Image"> 
            <img src={canvas.imageSrc} alt={canvas.imageAlt} /> 
            </div>

            <div className="PostText">        
            <p>{canvas.text}</p>
            <a href={`/user/${canvas.userName}`}>{canvas.userName}</a>
        </div>
    </div>
    )

}

export default CanvasPost; 