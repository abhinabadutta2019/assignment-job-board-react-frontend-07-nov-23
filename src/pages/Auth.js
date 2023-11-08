import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  //
  const { login, url } = useContext(AuthContext);
  //
  // State to track which form is currently visible
  const [isLoginForm, setIsLoginForm] = useState(true);
  //
  const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const response = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const loginResult = await response.json();

        if (loginResult.token) {
          login(loginResult);
        }
      } else {
        // Show an alert for login error
        window.alert("Login failed. Please check your username and password.");
      }
    } catch (err) {
      console.log(err);
      // Show a generic error alert for network or other errors
      window.alert("An error occurred. Please try again.");
    }
  };
  //
  const toggleForm = () => {
    // Toggle between login and registration forms
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };
  //
  const registrationHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById("registrationEmail").value;
    const password = document.getElementById("registrationPassword").value;
    //
    const cvUrl = document.getElementById("registrationCV").value;
    //
    const userType = document.getElementById("userType").value; // Get the selected user type

    try {
      const response = await fetch(`${url}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          cvUrl: cvUrl,
          userType: userType, // Include the selected user type
        }),
      });

      console.log(response, "response");

      if (response.ok) {
        const registrationResult = await response.json();

        if (registrationResult.token) {
          login(registrationResult);
        }
      } else {
        //zod error showing with this
        if (response.status === 401) {
          // Handle validation error
          const errorResponse = await response.json();
          window.alert(errorResponse.error);
        } else {
          window.alert("Registration failed. Please check your input.");
        }
      }
    } catch (err) {
      console.log(err);
      window.alert("An error occurred during registration. Please try again.");
    }
  };

  //
  return (
    <div>
      <h1>Auth</h1>
      {/*  */}
      <div>
        <button onClick={toggleForm}>
          {isLoginForm ? "Switch to Registration" : "Switch to Login"}
        </button>
      </div>
      {/*  */}
      {isLoginForm ? (
        <div>
          <h2>Login form</h2>
          <form onSubmit={loginHandler}>
            {/* <form> */}
            <label>email</label>
            <input id="loginEmail" type="text" required />
            <label>Password</label>
            <input id="loginPassword" type="text" required />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Registration form</h2>
          <form onSubmit={registrationHandler}>
            <label>Email</label>
            <input id="registrationEmail" type="text" required />
            <label>Password</label>
            <input id="registrationPassword" type="text" required />
            <label>CV url</label>
            <input id="registrationCV" type="text" required />
            <label>Select User Type</label>
            <select id="userType">
              <option value="applicant">Applicant</option>
              <option value="jobcreator">Job Creator</option>
            </select>

            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
