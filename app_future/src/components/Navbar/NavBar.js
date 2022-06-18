import { Cart } from "../Cart/Cart";
import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar =()=>{
  return(
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Future APP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link to='' class="nav-link active" aria-current="page" >Home
      </Link>
            
          </li>
          <li class="nav-item">
            
          </li>
          <li class="nav-item dropdown">
          
            
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <Link to='./Cart' class="nav-link active" aria-current="page" >
     <CartWidget/>
      </Link>
     
    </div>
  </nav>
  );
}
export default NavBar;