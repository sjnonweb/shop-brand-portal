import axios from 'axios';

export function LoginStart(email, password) {
	return function(dispatch) {
		let data = {
			email,
			password
		};
		let headers = {
			'Content-Type': 'application/json'
		}
		axios({
			method: 'post',
			url: 'http://api-dev.shopsocial.io:9000/api/v1/portal/sign-in',
			data: data,
			headers: headers
		})
			.then((response) => {
				console.log(response);
				dispatch(LoginSuccessful(response.data))
			})
			.catch((err) => {
				console.log('Error', err);
				dispatch(LoginUnsuccessful())
			});
	}
}

const LoginSuccessful = (data) => ({
	type: 'LOGIN_SUCCESSFUL',
	payload: data
})

const LoginUnsuccessful = () => ({
	type: 'LOGIN_UNSUCCESSFUL'
})
