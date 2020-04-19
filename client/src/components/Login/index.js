import React, { useState, useContext } from 'react'
import userContext from '../../utils/userContext';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API'

export default () => {
	// let history = useHistory();
	const [loginState, setLoginState] = useState({
		username: '',
		password: '',
		email: '',
		login: 0
	})

	const { user, setUser, setIsLoggedIn } = useContext(userContext)

	const handleChange = event => {
		setLoginState({
			...loginState,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault()

		//request to server to add a new username/password
		API.loginSignup(loginState)
			.then(response => {
				console.log(response)
				response.err ? console.log(response.msg) :
					setUser(response.data);
				setIsLoggedIn(true)
			}).catch(error => {
				console.log(error)
			})
	}

	return (
		user ? <Redirect to="/goals" /> : <div className="SignupForm">
			<div className="col s-8 parent">
				<img src="./images/keyboard.png" className="sign-image responsive-img" alt="An image of a womans hands resting on a computer keyboard. The photo is composed of black and teal lines striped together to render the image." />
			</div>
			<h4>{loginState.login ? 'Log In' : 'Sign up'}</h4>

			<button className="btn btn-primary button" onClick={() => setLoginState({ ...loginState, login: !loginState.login })}>
				{loginState.login ? 'Sign up now!' : 'Log In!'}
				{/* shortened to help button on mobile => 'New user? Sign up now!' : 'Already have an account? Log In!' */}
			</button>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={loginState.username}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={loginState.password}
							onChange={handleChange}
						/>
					</div>
				</div>
				{loginState.login ? "" : <div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">email: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="email"
							type="email"
							name="email"
							value={loginState.email}
							onChange={handleChange}
						/>
					</div>
				</div>}
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto button"
						onClick={(e) => handleSubmit(e)}
						type="submit"
					>{loginState.login ? 'Log In' : 'Sign up'}</button>
				</div>
			</form>
		</div>
	)
}
