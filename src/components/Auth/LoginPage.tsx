import React, {Component} from 'react';
import './LoginPage.css';
import {AiOutlineEyeInvisible, AiOutlineUser, AiTwotoneLock} from "react-icons/all";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div className="login-page">
                    <div className="left-side-first">
                        <div className="left-side-second">
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
                                    <AiTwotoneLock className="lockicon" />
                                    <input className="inputcred password" placeholder="Password" type="password"/>
                                    <div className="forgotpassword">Forgot password?</div>
                                    <AiOutlineEyeInvisible className="eyeicon"/>
                                </div>

                                <input className="submitformbutton" type="submit" value="Log in" />




                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default LoginPage;