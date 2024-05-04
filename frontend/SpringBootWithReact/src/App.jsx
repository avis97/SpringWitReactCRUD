import Navbar from "./Layout/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/update/:id" element={<EditUser/>}/>
          <Route path="/get/:id" element={<ViewUser/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
