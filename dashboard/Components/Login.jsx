import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import "./login.css";

const Login = () => {
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    const register = () => {
        x.style.left = -400 + 'px';
        y.style.left = 50 + 'px';
        z.style.left = 110 + 'px';

    };
    const login = () => {
        x.style.left = 50 + 'px';
        y.style.left = 450 + 'px';
        z.style.left = 0;

    };
    const sendData = () => {
        if (pass != confirmPass) {
            alert("Enter Correct Password");
        }
    };

    return (
        <>
            <div class="container-fluid">
                <div class="main">
                    <div class="form-box">
                        <div class="myBtnBox">
                            <div id="btn"></div>
                            <buttton type="buttton" class="myBtn" onClick={login}>Login</buttton>
                            <buttton type="buttton" class="myBtn" onClick={register}>Register</buttton>
                        </div>
                        <div class="socialIcons">
                            <img src="fb.png" alt="" />
                            <img src="tw.png" alt="" />
                            <img src="gp.png" alt="" />

                        </div>
                        <form id="login" class='login'>
                            <input type="text" class="input-field" placeholder="User ID" required />
                            <input type="text" class="input-field" placeholder="Enter Password" required />
                            <input type="checkbox" class="chk-box" /><span>Remember Password</span>
                            <button type="submit" class="submit-btn">Log In</button>

                        </form>
                        <form id="register" class='login'>
                            <input type="text" class="input-field" placeholder="First Name" onChange={(e) => setFName(e.target.value)} required />
                            <input type="text" class="input-field" placeholder="Last Name" onChange={(e) => setLName(e.target.value)} required />
                            <input type="email" class="input-field" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} required />
                            <input type="text" class="input-field" placeholder="Enter Password" onChange={(e) => setPass(e.target.value)} required />
                            <input type="text" class="input-field" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} required />
                            <input type="checkbox" class="chk-box" /><span>I agree to terms & condition</span>
                            <button type="submit" class="submit-btn" onClick={sendData}>Register</button>

                        </form>
                    </div>

                </div>
            </div>

        </>
    );
};
export default Login;