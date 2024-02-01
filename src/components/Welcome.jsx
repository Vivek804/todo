import { Link, useParams } from "react-router-dom";

export default function Welcome() {
    const { username } = useParams();
    return (
      <div className="Loginform">
        <h1>Welcome {username}</h1>
        <Link to="/todo">Click here to check your Todos</Link>
      </div>
    );
  }