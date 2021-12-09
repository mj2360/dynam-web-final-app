import React from 'react'; 

function Header({ logOut, loggedIn}) {
    return(
     <header className="HeaderWrapper">
         <div className="Header PageWrapper">
         <h1 className="Logo">Doodl.</h1>
         <nav>
             {/* use icons for links  */}
             {!loggedIn && (
                 <>
                    <a href="/login" className="aLogin">Login</a>
                    <a href="/create-user" className="aCreate">Create User</a>
                 </>
             )}

             {loggedIn && (
                 <>
                    <a href="/">Dashboard</a>
                    <a href="/user/:id">Profile</a>
                    <a href="/canvas-room">CanvasRoom</a>
                    <a href="/logout">Logout</a>
                 </>
             )}

            
         </nav>
         </div>
     </header>
    )
}

export default Header; 