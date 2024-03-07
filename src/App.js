

// import Loginform from "./components/forms/Loginform";
import { Routes, Route, Navigate } from 'react-router-dom';
import Registerationform from "./components/forms/Registerationform";
import Loginform from './components/forms/Loginform';
import Dashboard from './components/forms/Dashboard';
import Profiledata from './components/forms/Profiledata';



function App() {
  return (
    <div className='m-3'>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={ <Registerationform/> } />
      <Route path="/login" element={<Loginform />} />
      <Route path="/dashboard/:email" element={<Dashboard />} />
      <Route path="/profiledata" element={<Profiledata />} />
      
     </Routes>
    </div>
  );
}

export default App;
