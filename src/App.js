import React from 'react'; 
import {Navigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
//import CanvasRoom from '.pages/CanvasRoom';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Dashboard from '.pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <Router>
       <Routes>
         <Route path="/login" element={<Login />}/>
         <Route path="/create-user" element={<CreateUser />}/>
         <Route path="/canvas-room" element={<CanvasRoom />}/>
         <Route path="/user/:id" element={<UserProfile />}/>
         <Route path="/" element={<Dashboard />}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
