import React from 'react';
import { loginUrl } from '../Public/spotify';
import "./Login.css";

function Login() {
    return (
        <div className='login'>
            {/*Spotify logo  */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo" />
            {/* Login/Signup */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}

export default Login