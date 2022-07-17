import { Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">Future APP</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='' className="nav-link active" aria-current="page" >Home</Link></li>
            <li className="nav-item">
              <Link to='/estado/Crudo' className="nav-link active" aria-current="page" >Crudo</Link></li>
            <li className="nav-item">
              <Link to='/estado/Cocido' className="nav-link active" aria-current="page" >Cocido</Link></li>
          </ul>
        </div>
        <Link to='./Cart' className="nav-link active" aria-current="page" >
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;