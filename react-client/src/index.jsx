import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
import Login from './components/Login.jsx';
import Checklist from './components/checklist.jsx';
import ObjList from './components/objlist.jsx';
import CurrentInfo from './components/CurrentInfo.jsx';
import Reservations from './components/Reservations.jsx';
import SideBar from './components/SideBar.jsx';
import MapView from './components/mapview.jsx';

var sidebarTestData = [{location:'Paris'}, {location: 'San Francisco'}, {location: 'Alaska'}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      sideBarOn: true,

    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    console.log('App Mounted');
  }

  handleLogin() {

  }

  render () {
    return (

      <div class = 'wrapper'>
        <div className='.container-fluid'>
          <nav className="navbar navbar-default bg-faded">
            <h1 id="app-title" className="navbar-brand">FunTrip</h1>
          </nav>
          <div className="col-md-12">

            <Login loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
                <button type="button" className="btn btn-primary" onClick = {() => {this.setState({sideBarOn:!this.state.sideBarOn})}}>
                <i class="glyphicon glyphicon-align-left"></i>
                Toggle Sidebar
                </button>
            {this.state.sideBarOn ? <SideBar name = {'User1'} testData = {sidebarTestData}/> : null}
            <CurrentInfo/>
            <Reservations/>
          </div>
          <div className="main">
            <Checklist />
            <ObjList />
            <MapView/>
          </div>
        </div>
      </div>

    );

  }
}


ReactDOM.render(<App />, document.getElementById('app'));
