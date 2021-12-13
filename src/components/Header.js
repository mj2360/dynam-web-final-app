import React from 'react'; 
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';


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
                    <a href="/" className="icon"><FontAwesomeIcon icon={faHome} /></a>
                    <a href="/user/:id" className="icon" ><FontAwesomeIcon icon={faUser} /></a>
                    <a href="/canvas-room" className="icon"><FontAwesomeIcon icon={faPlusSquare} /></a>
                    <a href="/login" onClick={() => logOut()} className="aLogout">Logout</a>
                 </>
             )}

            
         </nav>
         </div>
     </header>
    )
}

export default Header; 