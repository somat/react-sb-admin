import React, {Component} from 'react'

class Sidebar extends Component {

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
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

export default Sidebar
