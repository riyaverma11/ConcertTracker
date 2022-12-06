import "./login.css";
import { useRef } from "react";
import { useContext } from "react";
import React, { useState } from "react";

export default function Login() {
	const email = useRef();
	const password = useRef();


	return (
		<div className="login" role="main" aria-label="This is the login page where user type in their email and password to access their account">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo"> SQLover's Concert Tracker  </h3>
					<span className="loginDesc">
						Keep track of all your concerts!
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox">
						<input
							placeholder="Email"
							type="email"
							className="loginInput"
							ref={email}
					
						/>
						<div id="emailError" style={{ color: "red" }}></div>
						<input
							placeholder="Password"
							type="password"
							className="loginInput"
							ref={password}
							
						/>
						<div id="passError" style={{ color: "red" }}></div>
						<button className="loginButton">
                            Login
                        
						</button>
						{/*<span className="loginForgot">Forgot Password?</span>*/}
						<button className="loginRegisterButton" >
							Register
						</button>
						<div id="overallError" style={{ color: "red" }}></div>
					</form>
				</div>
			</div>
		</div>
	);
}