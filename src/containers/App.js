import React, {Component} from 'react'
import Header from './Header'

class App extends Component {

  constructor() {
    super()
    this.state = {
      navbarCollapsed: (window.innerWidth <= 500 ? true : false)
    }
    this.handleNavbar = this.handleNavbar.bind(this)
  }

  handleNavbar() {
    this.setState({navbarCollapsed: !this.state.navbarCollapsed})
  }

  render() {
    return(
      <div id="wrapper">
        <Header
          handleNavbar={this.handleNavbar}
          navbarCollapsed={this.state.navbarCollapsed}/>

        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Data</h1>

                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App
