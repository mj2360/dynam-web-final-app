import React, { useState } from 'react'; 
import { Navigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import firebase from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import FirebaseConfig from './components/FirebaseConfig';
import CanvasRoom from './pages/CanvasRoom';

function App() {
  const app = firebase.initializeApp(FirebaseConfig);

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  const [appInitialized, setAppIntialized] = useState(false);

  const [userInformation, setUserInformation] = useState({});

  return (
    <div className="App">
      <Header logOut={logOut} loggedIn={loggedIn} />
     <Router>
       <Routes>
         <Route path="/login" element={
           !loggedIn ? (
         <Login 
         setErrors={setErrors}
         setLoggedIn={setLoggedIn}
         setUserInformation={setUserInformation}
         />
         ) : (
          <Navigate to={`/user/${userInformation.uid}`} />
        )
        }
        />

         <Route path="/create-user" element={
           !loggedIn ? (
         <CreateUser
         setErrors={setErrors}
         setLoggedIn={setLoggedIn}
         setUserInformation={setUserInformation}
         />
         ) : (
          <Navigate to={`/user/${userInformation.uid}`} />
        )
        }
        />

         <Route path="/canvas-room" element={
           loggedIn ? (
         <CanvasRoom />
         ) : (
          <Navigate to="/canvas-room" />
        )
      }/>

         <Route path="/user/:id" element={
           loggedIn ? (
         <UserProfile />) : (
          <Navigate to="/user/:id" />
        )
      }/>

         <Route path="/" element={
           loggedIn ? (
         <Dashboard />
         ) : (
          <Navigate to="/" />
        )
      }/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
