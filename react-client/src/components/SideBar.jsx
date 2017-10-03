import React from 'react';

class Sidebar extends React.Component {
	constructor(props){
		super(props);
		this.state = {trips:this.props.testData}
	}

	inputs(){
		var location = () => {
			var tripName = prompt('What are we calling this trip?')
			var loc = prompt('Where is this trip located?')
			var date = prompt('Departing date: DD/MM/YYYY')
			var newTrip = this.state.trips.concat([{location:loc}])
			var addTripToList = confirm(`Add ${tripName} to the list of trips? \nLocation: ${loc} \nDate: ${date}`)

			addTripToList ? this.setState({trips:newTrip}) : null;
		}
		location()
	}

	render(){
		return (
			<nav id = 'sidebar'>
			  <div className="sidebar-header">
			    <h3> FunTrip</h3>
			    <img className = 'userLogo' src='http://www.crazy3dfree.com/uploads/101101/1_155752_1.jpg'/>
			    <h4> Welcome</h4>
			    <h4> {this.props.name} </h4>
			  </div>
			  <ul className="list-unstyled components">
			    <li>
		        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"> Your Trips</a>
		        <ul className="collapse list-unstyled" id="homeSubmenu">
		        {console.log(this.state.trips)}
		        {this.state.trips.map((el,index) => <SidebarTrips trip = {el} key = {index}/>)}
			      </ul>
			    </li>
			    <button type="button" className="btn btn-success"
			    onClick = {() => this.inputs()}
			    > Add New Trip </button>

			  </ul>
			</nav>
		)
	}
} 

const SidebarTrips = (props) => (
	<li><a href="#">{props.trip.location}</a></li>
)

export default Sidebar;