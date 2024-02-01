import { Link } from "react-router-dom";

export default function LogoutPage() {
  return (
    <div>
      <h1>Logged Out</h1>
      <h3>To Login please click the redirect link below</h3>
      <a className="nav-link" href="/">
        redirect
      </a>
      {/* <Link className="nav-link" to='/'>Redirect</Link> */}
    </div>
  );
}
