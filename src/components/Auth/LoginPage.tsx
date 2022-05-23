import React, {useState} from 'react';
import './LoginPage.css';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser, AiTwotoneLock} from "react-icons/all";
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom';
import axios from "axios";
import {varenvconst} from "../../constants"

interface ILoginPage {
    setToken: any
}


export function LoginPage(props: ILoginPage) {

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



    //conexion a la api
    const login = async () => {
        if (username && password) {
            //conexion a la api
            console.log("start")
            await axios.post(`${varenvconst.MICROSERVICEUSER}/login`, {
                "email": username,
                "password": password
            }).then(res => {
                if (res.data.jwt) {
                    localStorage.setItem('token', res.data.jwt)
                    props.setToken(res.data.jwt);
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
                                    <input className="inputcred username" placeholder="Username" onInput={handleChangeUsername}/>
                                    <AiTwotoneLock className="lockicon"/>
                                    <input className="inputcred password" placeholder="Password" type="password" onInput={handleChangePassword}/>
                                    <div className="forgotpassword"><a href="">Forgot password?</a></div>


                                    <div className="iconsshow" onClick={togglePasswordVisibility}>
                                        {passwordstate == true ? <AiOutlineEye className="eyeicon"/> :
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

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
};
export default LoginPage;