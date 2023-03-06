import Admin from "./Admin";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import RegisterUser from "./Register";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          
          <Route path="/user" element={<RegisterUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
