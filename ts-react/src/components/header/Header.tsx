import './Header.scss'
import {Link} from "react-router-dom";

const Header = () => {
  return <>
    <header className="header-container">
      <Link key="/" to="/">
        <h1>Tae Blog</h1>
      </Link>
      
      <aside className="nav-bar">
        <Link to="/posts">
          <h3>Post</h3>
        </Link>
      </aside>
    </header>
  </>
}

export default Header;