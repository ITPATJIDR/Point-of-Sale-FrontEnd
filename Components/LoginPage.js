import React,{useState} from 'react';
import {useAuth} from "../context/AuthContext"

const INITIALSTATE = {
	username: "",
	password: "",
}


const LoginPage = ({setLogin,isLogin}) => {

	const [user,setUser] = useState(INITIALSTATE)
	const {auth,setAuth} = useAuth()
	const [loginStatus,setLoginStatus] = useState(false)

	const {username,password} = user;

	const handleChange =(e)=>{
		const {name,value} = e.target
		setUser({...user,[name]:value})
	}

	const onSubmit = () =>{
		if (username == "admin" && password == "admin"){
			setAuth(true)
		}else{
			setLoginStatus(true)
		}
	}

	return (
		<div className="Main-login-page">
			<div className="Login-page-header">
				<p> RotiMax Cafe </p>
			</div>
			<div className="Login-box">
				<div className="Login-box-Header">
					<p>Login</p>
				</div>
				{loginStatus ? <div className="Login-box-alert">Username or Password is not exists !!</div> : null }
				<div className="Login-box-userinput">
					<p>Username</p>
					<input type="text" className="Login-box-username" placeholder="Username" name="username" value={username} onChange={handleChange} />
					<p>Password</p>
					<input type="password" className="Login-box-password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
					<div className="Login-box-button">
						<button className="Login-box-submit" onClick={onSubmit}>Login</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage;