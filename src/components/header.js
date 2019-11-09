import React from 'react';
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa';

class Header extends React.Component {

    state = { showMenu: false }

    toggleMenu = () => {
      this.setState({
        showMenu: !this.state.showMenu
      })
    }
    render () {
        
        const menuVis = this.state.showMenu ? 'active' : '';

        return(
        <nav className="navbar">
            <button className="navbar-toggle" id="js-navbar-toggle" onClick={this.toggleMenu}>
                <FaBars />
            </button>
            <h2 className="banner">
            <Link to="/">
            Alan Hylands
            </Link>      
          </h2>
            <ul className={`main-nav ${menuVis}`} id="js-menu">
                <li><Link to="/projects/">PROJECTS</Link></li>
                <li><Link to="/articles/">ARTICLES</Link></li>
                <li><Link to="/about/">ABOUT</Link></li>
            </ul>
        </nav>  
        )
  }
  
};

export default Header;