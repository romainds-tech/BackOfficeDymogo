import React, {Component} from 'react';
import './LoginPage.css';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser, AiTwotoneLock} from "react-icons/all";

interface ILoginPage {
    passwordstate: boolean;
}

class LoginPage extends Component<boolean, ILoginPage> {

    constructor(props: boolean) {
        super(props);
        this.state = {
            passwordstate: false
        }
    }

    //Toggle password visibility and toggle input field password to text
    showPassword = () => {
        this.setState({
            passwordstate: !this.state.passwordstate
        })

        let input = document.querySelector('.password') as HTMLInputElement;

        if (input.type === 'password') {
            input.type = 'text'
        }
        else {
            input.type = 'password'
        }
    }



    render() {
        return (
            <div>
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
                                    <AiTwotoneLock className="lockicon" />
                                    <input className="inputcred password" placeholder="Password" type="password"/>
                                    <div className="forgotpassword"> <a href="">Forgot password?</a></div>


                                    <div className="iconsshow" onClick={this.showPassword}>

                                        {this.state.passwordstate == true ? <AiOutlineEye className="eyeicon" /> : <AiOutlineEyeInvisible className="eyeicon" />}
                                    </div>

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