// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Admin from './components/Admin';

import './App.css';
import { useAuth } from './context/AuthContext';
import Port from './components/Port';
import AdminExperience from './components/AdminExperience';

import ExperienceList from './components/ExperienceList';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

// Import Toastify components and CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useAuth();

  return (
    <Router>
            
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Port/>} />
       

        <Route path="/login" element={user ? <Navigate to="/admin" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/admin" /> : <SignUp />} />
        <Route path="/admin" element={!user ? <Navigate to="/login" /> : <Admin />} />
        
        <Route path='/newproject' element={!user ? <Navigate to="/login" /> : <ProjectForm/>}/>
        <Route path='/newexpi' element={!user ? <Navigate to="/login" /> : <AdminExperience/>}/>
        <Route path='/expi'  element={!user ? <Navigate to="/login" /> :<ExperienceList/>}/>
       
        <Route path='/p'  element={!user ? <Navigate to="/login" /> :<ProjectList/>}/>
        <Route path="*" element={<Port />} />
      </Routes>
    </Router>
  );
}

export default App;
