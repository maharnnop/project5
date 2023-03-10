import { Route, Routes, Link, Navigate } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import Index from './components/Index/Index'
import SignUp from "./components/Signup/SignUp";
import Login from './components/Login/Login'
import Profile from "./components/Profile/Profile";
import PackageDetail from "./components/PackageDetail/PackageDetail";
import PolicyDashboard from "./components/PolicyDashboard/PolicyDashboard";
import Policy from "./components/Policy/Policy";
import Draft from "./components/Draft/Draft";
// import Invest from "./components/Invest/Invest";
// import InvestDetail from "./components/InvestDetail/InvestDetail";
import Dashboard from "./components/Dashboard/Dashborad";
import axios from "axios";
// import Test from "./components/Test";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/packages/:id" element={<PackageDetail />} />
          <Route path="/policy" element={<PolicyDashboard />} />
          <Route path="/policy/:id" element={<Policy />} />
          <Route path="/draft/:id" element={<Draft />} />
          {/* <Route path="/fund/:id" element={<InvestDetail />} /> */}
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/invest" element={<Invest />} /> */}
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
      </main>
      
      
    </div>
  );
}

export default App;
