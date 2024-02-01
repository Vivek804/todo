import { createContext, useContext, useState } from "react";

// 1.Create a context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components
function AuthProvider({ children }) {
  // 3.Put some state for the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(username, password) {
    if (username === "vivek" && password === "1234") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }
  function logoutflag(){
    setAuthenticated(false)
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated,login,logoutflag }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
