import React from 'react';
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function Login() {
    const [{user}, dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
};

    return (
        <div className="login">
            <div className="login_container">
            <img src="https://img.icons8.com/cute-clipart/128/000000/weixing.png" />
                <div className="login_text">
                    <h1> Sign in to Let's Chat </h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
}

export default Login;
