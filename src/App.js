import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  //
  //
  const { user } = useContext(AuthContext);
  //
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/auth" />}
            />

            {/* <Route path="/" element={<Home />} /> */}
            <Route
              path="/auth"
              element={!user ? <Auth /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
