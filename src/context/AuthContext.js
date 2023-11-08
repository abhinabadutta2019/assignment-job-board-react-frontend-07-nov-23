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
  useEffect(() => {
    //
    const fetchUserLS = async () => {
      try {
        // console.log("calling fetchUserLS ");
        const user = localStorage.getItem("user");
        //
        setUser(user);
      } catch (err) {
        console.error("Error fetching data in AuthContext:", err);
      }
      //
    };

    // console.log("user: in fetchUserLS ", user);
    // calling the function-
    fetchUserLS();
    //
  }, [user]);

  return (
    <>
      <AuthContext.Provider value={{ user, login, url }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthContextProvider };
