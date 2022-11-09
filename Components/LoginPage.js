import React,{useState} from 'react';


const LoginPage = ({setLogin,isLogin}) => {
	return (
		<div className="Main-login-page">
			<div className="Login-page-header">
				<p> RotiMax Cafe </p>
			</div>
			<div className="Login-box">
				<div className="Login-box-Header">
					<p>Login</p>
				</div>
				<div className="Login-box-userinput">
					<p>Username</p>
					<input type="text" className="Login-box-username" placeholder="Username"/>
					<p>Password</p>
					<input type="text" className="Login-box-password" placeholder="Password"/>
					<div className="Login-box-button">
						<button className="Login-box-submit" onClick={setLogin}>Login</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage;