import React from 'react'; 

function CanvasPost ({ canvas }) {
    <div className="PageWrapper">
        <img src={canvas.imageSrc} alt={canvas.imageAlt} />
        <a href="/user/:id">{canvas.userDisplayNames}</a>
    </div>
}

export default CanvasPost; 