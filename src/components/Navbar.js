import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to="/">
        <h2>My App Title</h2>
      </Link>
      <Link to="/auth">Auth</Link>
    </>
  );
};

export default Navbar;
