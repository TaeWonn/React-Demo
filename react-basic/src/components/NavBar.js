import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const activeMenu = ({isActive}) => {
    return isActive ? "nav-link active" : "nav-link"
  }

  return <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                  className={ activeMenu }
                  aria-current="page" 
                  to="/blogs">
                    Blogs
                  </NavLink>
              </li>
            </ul>
        </div>
      </nav>
  </>
}

export default NavBar;