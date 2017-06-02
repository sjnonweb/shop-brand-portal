const initialState = {
	status: null,
	data: {
		accountId: '',
		accountType: null,
		name: '',
		email: '',
		phoneNo: null,
		token: ''
	}
};

export default function LoginReducer(state=initialState, action) {
	switch(action.type) {
		case 'LOGIN_SUCCESSFUL': {
			console.log('inside reducer', action);
			localStorage.setItem('authToken', action.payload.data.token);
			return {
				...state,
				...action.payload
			}
		}
		case 'LOGIN_UNSUCCESSFUL': {
			return {
				...state,
				status: 400
			}
		}
		case 'LOGOUT': {
			localStorage.removeItem('authToken');
			return {
				...initialState
			}
		}
		default: return state;
	}
}