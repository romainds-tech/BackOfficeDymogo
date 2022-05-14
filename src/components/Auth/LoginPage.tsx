import React, {Component} from 'react';
import './LoginPage.css';

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
                                    <input className="username" />
                                    <input className="password" />
                                </div>




                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default LoginPage;