import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
// import { AuthContext } from "./security/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("vivek");
  const [password, setPassword] = useState("1234");
  // const [successMsg, setSuccessMsg] = useState(false);
  const [failMsg, setFailMsg] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleSubmit() {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setFailMsg(true);
      // setSuccessMsg(false);
    }
  }

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }
  return (
    <div className="Login">
      {failMsg && (
        <div>Authentication failed, Check for credentitals again</div>
      )}
      <div className="LoginForm">
        <div>
          <label>Username : </label>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={usernameHandler}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            name="Password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}
