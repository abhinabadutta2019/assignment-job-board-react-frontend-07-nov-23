import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
//
const AuthContextProvider = ({ children }) => {
  //
  const url = "http://localhost:3008";
  //
  const [user, setUser] = useState(null);

  //
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    //
    setUser(userData);
  };
  //
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    console.log("Logout called");
  };
  //
  useEffect(() => {
    //
    const fetchUserLS = async () => {
      try {
        // console.log("calling fetchUserLS ");
        // const user = localStorage.getItem("user");
        // setUser(user);
        const userJSON = localStorage.getItem("user");
        if (userJSON) {
          const user = JSON.parse(userJSON);
          setUser(user);
        }
        //
      } catch (err) {
        console.error("Error fetching data in AuthContext:", err);
      }
      //
    };

    // console.log("user: in fetchUserLS ", user);
    // calling the function-
    fetchUserLS();
    //
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, login, url, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthContextProvider };
