import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main style={{ padding: "1rem", color: "#fff" }}>
      <h2>404 - Page Not Found</h2>
      <p>There's nothing here!</p>
      <Link to="/" style={{ color: "white", textDecoration: "underline" }}>
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound