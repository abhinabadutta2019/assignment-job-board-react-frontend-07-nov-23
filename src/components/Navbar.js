import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppNavbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">WorkWave</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {user?.userType === "jobcreator" && (
            <Nav.Link href="/create-job">Create Job</Nav.Link>
          )}
          {user?.userType === "jobcreator" && (
            <Nav.Link href="/your-created-jobs">Your Created jobs</Nav.Link>
          )}
          {user?.userType === "applicant" && (
            <Nav.Link href="/your-applied-job">Your Applied Jobs</Nav.Link>
          )}
        </Nav>
        {user ? (
          <Button variant="outline-primary" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Nav.Link href="/auth">Auth</Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
