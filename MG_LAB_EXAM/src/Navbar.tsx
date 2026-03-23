import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
  
          <span className="navbar-brand">Student Portal</span>
  
          <div className="navbar-nav horizontal-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/bookrequest">Book Request</Link>
            <Link className="nav-link" to="/eventfeedback">Event Feedback</Link>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;