import { Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link to='/' class="navbar-brand">Future APP</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='' class="nav-link active" aria-current="page" >Home</Link></li>
            <li class="nav-item">
              <Link to='/estado/Crudo' class="nav-link active" aria-current="page" >Crudo</Link></li>
            <li class="nav-item">
              <Link to='/estado/Cocido' class="nav-link active" aria-current="page" >Cocido</Link></li>
          </ul>
        </div>
        <Link to='./Cart' class="nav-link active" aria-current="page" >
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;