import CardArray from './cardArray';
import React, {Component} from 'react';
//import robots from './robots';
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll'
//import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			searchText : '',
			robots : []
		}

	}


	onSearchChange = (event)=>{
		console.log('aye');
		this.setState({searchText: event.target.value});
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=> response.json())
		.then((response)=> this.setState({robots:response})
			);

	}


	render(){
		const {searchText,robots} = this.state;
		const filteredRobots = robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchText.toLowerCase());
		})
		return(
			<div className = 'tc'> 
				<div>
					<h1 className='f1 headerH1'>Robofriends</h1>
					<SearchBox onSearchChange ={this.onSearchChange} />
				</div>
				<Scroll>
					<CardArray robots = {filteredRobots} />
				</Scroll>
			</div>
		)
	}


}

export default App;