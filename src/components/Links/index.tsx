import { Link, useNavigate } from "react-router-dom";

export default function Links() {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/">Home</Link>
      <Link to={""} onClick={() => navigate(-1)}>
        Go back
      </Link>
    </>
  );
}
