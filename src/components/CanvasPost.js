import React from 'react'; 

function CanvasPost ({ canvas }) {
    <div className="PageWrapper">
        <img src={canvas.mageSrc} alt={canvas.mageAlt} />
        <a href="/user/:id">{canvas.userDisplayNames}</a>
    </div>
}

export default CanvasPost; 