// import { Link, useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  //
  const { user, logout } = useContext(AuthContext);
  //
  //   const navigate = useNavigate();
  //
  return (
    <>
      {user && (
        <>
          <Link to="/">
            <h2>My App Title</h2>
          </Link>
          {/*  */}
          {user?.userType === "jobcreator" && (
            <Link to="/create-job">Create Job</Link>
          )}

          {/*  */}

          <button onClick={logout}>Logout</button>
        </>
      )}
      {!user && (
        <>
          <Link to="/auth">Auth</Link>
        </>
      )}
    </>
  );
};

export default Navbar;
