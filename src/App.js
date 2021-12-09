import React, { useState, useEffect } from 'react'; 
import { Navigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
//import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import FirebaseConfig from './components/FirebaseConfig';
import CanvasRoom from './pages/CanvasRoom';


function App() {
  const app = initializeApp(FirebaseConfig);

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  const [appInitialized, setAppIntialized] = useState(false);

  const [userInformation, setUserInformation] = useState({});


  useEffect(() => {
    initializeApp(FirebaseConfig);
    setAppIntialized(true); 
  }, []);

  useEffect(() => {
    const auth = getAuth();
    if (appInitialized) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //Logged in
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          //Not Logged in
          setUserInformation({});
          setLoggedIn(false);
        }
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);

      });
  }

  if (loading || !appInitialized) return null;

  return (
    <div className="App">
      <Header logOut={logOut} loggedIn={loggedIn} />
     <Router>
       <Routes>
         <Route path="/login" element={
           !loggedIn ? (
         <Login 
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
          <Navigate to="/login" />
        )
      }/>

         <Route path="/user/:id" element={
           loggedIn ? (
         <UserProfile />) : (
          <Navigate to="/login" />
        )
      }/>

         <Route path="/" element={
           loggedIn ? (
         <Dashboard />
         ) : (
          <Navigate to="/login" />
        )
      }/> 
       </Routes>
     </Router>
    </div>
  );
}

export default App;
