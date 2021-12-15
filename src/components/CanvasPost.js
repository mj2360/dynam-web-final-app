import React from 'react'; 


function CanvasPost ({ canvas }) {
    return (
        <div className="CanvasWrapper">
            <div className="Image"> 
            <img src={canvas.imageSrc} alt={canvas.imageAlt} style={{ width: '450px', paddingTop: '60px' }}/> 
            </div>

            <div className="PostText">        
            <p>{canvas.text}</p>
            <a href={`/user/${canvas.email}`}>{canvas.email}</a>
        </div>
    </div>
    )

}

export default CanvasPost; 