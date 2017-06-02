import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginStart } from '../../actions/LoginActions'
import { Redirect } from 'react-router-dom';

import './Login.css';

class Login extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		if(!this.state.email.trim() || !this.state.password.trim()) {
			return;
		}
		this.props.dispatch(LoginStart(this.state.email, this.state.password));
	}
	

	render() {
		
		const error = (
			<p className="text-warning">Invalid username or password</p>
		)
		
		if(this.props.status === 200) {
			return (
				<Redirect to="/" />
			)
		}

		else {

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
						<div className="login-container">
							<div>
								<img src="http://via.placeholder.com/49x43" alt="shopsocial-brand" />
								<p className="brand-naming">shopsocial brand portal</p>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control login-input" id="InputEmail" placeholder="Email" />
										<input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control login-input" id="InputPassword" placeholder="Password" />
										<button type="submit" className="btn login-input"><span className="login-button-text">LOGIN</span></button>
									</div>	
								</form>
								{(this.props.status === 400)? error : null}
								<p className="apply-for">Apply for <span className="brand-access">Brand Access</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	}
}

const mapStateToProps = (state) => {
	const { loginData } = state;
	return {
		status: loginData.status
	}
}

Login = connect(mapStateToProps)(Login);
export default Login;
