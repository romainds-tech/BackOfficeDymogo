import React, {useEffect, useState} from 'react';
import './LoginPage.css';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser, AiTwotoneLock} from "react-icons/all";
import PropTypes from 'prop-types';
import axios from "axios";
import {varenvconst} from "../../constants"
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";


async function loginUser(credentials: any) {
    return axios.post(`${varenvconst.APIGATEWAY}login`, {
        "email": credentials.username,
        "password": credentials.password
    }).then(data => data.data)
}


export function LoginPage() {

    const navigate = useNavigate()

    const [passwordstate, setPasswordstate] = useState(false);

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleChangePassword = (event: any) => {
        setPassword(event.target.value);
    }
    const handleChangeUsername = (event: any) => {
        setUsername(event.target.value);
    }

    //Toggle password visibility and toggle input field password to text
    const togglePasswordVisibility = () => {
        const passwordInput = document.querySelector('.password');

        if (passwordInput) {
            if (passwordstate === false) {
                passwordInput.type = 'text';
                setPasswordstate(true);
            } else {
                passwordInput.type = 'password';
                setPasswordstate(false);
            }
        }
    }

    function isTokenExpired(token: any) {
        let decoded:any = jwt_decode(token);
        let currentTime:any = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        trygetToken()
    }, []);

    const trygetToken = () => {
        if(localStorage.getItem('token')){
            if(!isTokenExpired(localStorage.getItem('token')))
            {
                navigate('/dashboard')
            }
            else {
                navigate('/')
            }
        }
        else {
            navigate('/')
        }

    }


    const handleSubmit = async (e: any) => {
        const token = await loginUser({
            username,
            password
        });


        if (token.jwt) {
            localStorage.setItem('token', token.jwt);
            navigate('/dashboard')
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
                        <div>
                            <div className="login-form">
                                <div className="login-title">
                                    Hello there! Welcome back
                                </div>
                                <div className="inputs-list">
                                    <AiOutlineUser className="usericon"/>
                                    <input className="inputcred username" placeholder="Username"
                                           onInput={handleChangeUsername}/>
                                    <AiTwotoneLock className="lockicon"/>
                                    <input className="inputcred password" placeholder="Password" type="password"
                                           onInput={handleChangePassword}/>
                                    <div className="forgotpassword"><a href="">Forgot password?</a></div>


                                    <div className="iconsshow" onClick={togglePasswordVisibility}>
                                        {passwordstate == true ? <AiOutlineEye className="eyeicon"/> :
                                            <AiOutlineEyeInvisible className="eyeicon"/>}
                                    </div>

                                </div>

                                <button className="submitformbutton" onClick={handleSubmit}>Log in</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default LoginPage;