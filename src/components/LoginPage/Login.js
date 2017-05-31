import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
						<div className="login-container">
							<div>
								<img src="http://via.placeholder.com/49x43" alt="shopsocial-brand" />
								<p className="brand-naming">shopsocial brand portal</p>
								<form>
									<div className="form-group">
										<input type="email" className="form-control login-input" id="InputEmail" placeholder="Email" />
										<input type="password" className="form-control login-input" id="InputPassword" placeholder="Password" />
										<button type="submit" className="btn login-input"><span className="login-button-text">LOGIN</span></button>
									</div>	
								</form>
								<p className="apply-for">Apply for <span className="brand-access">Brand Access</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;
