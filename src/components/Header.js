import React from 'react'; 

function Header() {
    return(
     <header className="HeaderWrapper">
         <div className="Header PageWrapper">
         <h1>Doodl.</h1>
         <nav>
             {/* use icons for links  */}
            <a href="/">Dashboard</a>
            <a href="/login">Login</a>
            <a href="/create-user">Create User</a>
            <a href="/user/:id">Profile</a>
            <a href="/canvas-room">CanvasRoom</a>
            <a href="/logout">Logout</a>
            
         </nav>
         </div>
     </header>
    )
}

export default Header; 