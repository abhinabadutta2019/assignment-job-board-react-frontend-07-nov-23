import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateJob from "./pages/CreateJob";
import YourAppliedJobs from "./pages/YourAppliedJobs";
import YourCreatedJobs from "./pages/YourCreatedJobs";
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
            {/*  */}
            <Route
              path="/create-job"
              element={
                user?.userType === "jobcreator" ? (
                  <CreateJob />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            {/*  */}
            <Route
              path="/your-created-jobs"
              element={
                user?.userType === "jobcreator" ? (
                  <YourCreatedJobs />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            {/*  */}
            <Route
              path="/your-applied-job"
              element={
                user?.userType === "applicant" ? (
                  <YourAppliedJobs />
                ) : (
                  <Navigate to="/" />
                )
              }
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
