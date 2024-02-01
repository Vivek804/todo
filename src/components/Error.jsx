import { Link } from "react-router-dom";

export default function ErrorPage() {
  // const navigate = useNavigate()
    return (
      <div>
        <h1>Error 404</h1>
        <h3>Requsted Webpage not available</h3>
        <Link className="nav-link" to='/'>Redirect</Link>
      </div>
    );
  }