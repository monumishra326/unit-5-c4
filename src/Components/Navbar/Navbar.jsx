import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarHome" to={"/"}>
        
        <h1>Home</h1>
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        Login/Sign Up
      </Link>
    </div>
  );
};
