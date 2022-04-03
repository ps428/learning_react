import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Private/Login';
import { getTokenFromUrl } from "./Public/spotify";
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi();

function App() {

  //state wali cheez now, making variables in react
  const [token, setToken] = useState(null);

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //for security reasons, let's delete the hash from the cache post getting it's value
    window.location.hash = "";

    //_token since token is outside, so private kind of stuff started with underscore
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("USER Details: ", user);
      })
    }

    console.log("Token:", token);
    // to run only once, put empty brackets down here [] ,
    // if we want to run is such that when the name variable changes, use [name]
    // if we want to run is such that when the name, age, gender variables change, use [name, age, gender]
  }, []);


  return (
    // BEM used here
    <div className="app">
      {
        token ? (
          <h1>Welcome</h1>
          // <Player/>
        ) : (
          <Login/>
        )
      }

      {/* Spotify logo */}
      {/* Login/Sign up */}
    </div>
  );
}

export default App;
