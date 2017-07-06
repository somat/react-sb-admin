import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Sidebar extends Component {

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className={"sidebar-nav navbar-collapse "+(this.props.navbarCollapsed ? "collapse" : "")}>
          <ul className="nav in" id="side-menu">

            <li>
              <a href="" >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-table fa-fw" /> &nbsp;Data
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-table fa-fw" /> &nbsp;Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  navbarCollapsed: PropTypes.bool.isRequired
}

export default Sidebar
