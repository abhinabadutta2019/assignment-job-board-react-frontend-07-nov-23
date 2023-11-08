import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  //
  const { login, url } = useContext(AuthContext);
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
  return (
    <div>
      <h1>Auth</h1>
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
  );
};

export default Auth;
