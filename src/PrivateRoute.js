import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({Protect, ...rest}) => (
	<Route {...rest} render={props => (
		(localStorage.getItem('authToken')) ? (
			<Protect {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}
			/>
		)
	)}
	/>
)

