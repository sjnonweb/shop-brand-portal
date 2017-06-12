import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Logout } from '../../actions/LoginActions'

import Loader from 'react-loader';

class Home extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			loaded: false
		}
	}
	
	componentDidMount() {
		this.setState({
			loaded: true
		})
	}

	handleClick() {
		localStorage.removeItem('authToken');
		this.props.dispatch(Logout());
		const location = {
			pathname: '/login'
		}
		this.props.history.push(location)
	}

	render() {
		return (
			<Loader loaded={this.state.loaded}>
			<div className="container text-center">
				<div className="row">
					<h3 className="text-success">Protected home page - brand details</h3>
				</div>
				<div className="row">
					<button className="btn btn-danger" onClick={this.handleClick}>Logout</button>
				</div>
			</div>
			</Loader>
		)
	}
}

Home = connect()(Home);

export default Home;
