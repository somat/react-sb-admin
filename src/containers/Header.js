import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import Sidebar from './Sidebar';

class Header extends Component {
  render() {
    return(
      <div id="wrapper" className="content">
        <Navbar fluid={true}  style={ {margin: 0} }>
            <Brand>
              <span>
                SB Admin
                <button type="button" className="navbar-toggle"
                  onClick={this.props.handleNavbar}
                  style={{position: 'absolute', right: 0, top: 0}}>

                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </span>
            </Brand>
            <Sidebar
            navbarCollapsed={this.props.navbarCollapsed}/>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  handleNavbar: PropTypes.func.isRequired,
  navbarCollapsed: PropTypes.bool.isRequired
}

export default Header
