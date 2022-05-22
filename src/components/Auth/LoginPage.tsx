import React, {Component, useState} from 'react';
import './LoginPage.css';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser, AiTwotoneLock} from "react-icons/all";
import axios from "axios";
import { varenvconst } from "../../constants"

export function LoginPage() {

    const [password, setPassword] = useState(false);


    //Toggle password visibility and toggle input field password to text
    const togglePasswordVisibility = () => {
        const passwordInput = document.querySelector('.password');
        if (passwordInput) {
            if (password === false) {
                passwordInput.type = 'text';
                setPassword(true);
            } else {
                passwordInput.type = 'password';
                setPassword(false);
            }
        }
    }

    //conexion a la api
    const login = () => {
        const username = document.querySelector('.username').value;
        const password = document.querySelector('.password').value;
        console.log(username, password)

        if (username && password) {
            //conexion a la api
            axios.post(`${varenvconst.MICROSERVICEUSER}/login`, {
                "email": username,
                "password": password
            }).then(res => {
                console.log(res.data)
                if (res.data.jwt) {
                    localStorage.setItem('token', res.data.jwt)
                    window.location.href = '/'
                }
            }).catch(err => {
                console.log(err.response)
            })
        }
    }


    return (
        <>
            <div className="login-page">
                <div className="left-side-first">
                    <div className="left-side-second">
                        <div className="bandeau">
                            <img src="../../static/Dymogo.svg" alt=""/>
                        </div>
                        <div className="logo">
                            <img src="../../static/Logologinpage.svg" alt="logo"/>
                        </div>
                        <div className="rightreserved">
                            Copyright &copy; 2022. Dymogo. All rights reserved.
                        </div>
                    </div>
                </div>
                <div className="right-side-first">
                    <div className="right-side-second">
                            <div className="login-form">
                                <div className="login-title">
                                    Hello there! Welcome back
                                </div>
                                <div className="inputs-list">
                                    <AiOutlineUser className="usericon"/>
                                    <input className="inputcred username" placeholder="Username"/>
                                    <AiTwotoneLock className="lockicon"/>
                                    <input className="inputcred password" placeholder="Password" type="password"/>
                                    <div className="forgotpassword"><a href="">Forgot password?</a></div>


                                    <div className="iconsshow" onClick={togglePasswordVisibility}>
                                        {password == true ? <AiOutlineEye className="eyeicon"/> :
                                            <AiOutlineEyeInvisible className="eyeicon"/>}
                                    </div>

                                </div>

                                <input className="submitformbutton" type="submit" onClick={login} value="Log in"/>


                            </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default LoginPage;