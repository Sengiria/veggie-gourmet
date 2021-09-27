import { Link } from "react-router-dom";
import './header.styles.scss';

const Header = () => {
    return ( 
        <header>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">Veggie Gourmet</Link>
                    <div className="navbar-nav">
                        <Link to="/home">HOME</Link>
                        <Link to="/home">BLOG</Link>
                        <Link to="/home">ABOUT</Link>
                    </div>
                </div>
            </nav>

            <div className = "banner">
            <div className = "container">
              <h1 className = "banner-title">
                <span>Vegan.</span> From My Bowl
              </h1>
              <p>Make a change today!</p>
              <form>
                <input type = "text" className = "search-input" placeholder="find your food . . ." />
                <button type = "submit" className = "search-btn">
                  <i className = "fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>

        </header>
     );
}
 
export default Header;
