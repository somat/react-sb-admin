import React, {Component} from 'react'
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
                <button type="button" className="navbar-toggle" style={{position: 'absolute', right: 0, top: 0}}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </span>
            </Brand>
            <Sidebar />
        </Navbar>
      </div>
    )
  }
}

export default Header
