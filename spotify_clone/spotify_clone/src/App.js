import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Private/Login';
import { getTokenFromUrl } from "./Public/spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player  from "./Private/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  //state wali cheez now, making variables in react
  // const [token, setToken] = useState(null);

  //dispatch as special gun to shoot at data layer
  const [{user, token},dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    //for security reasons, let's delete the hash from the cache post getting it's value
    window.location.hash = "";

    //_token since token is outside, so private kind of stuff started with underscore
    const _token = hash.access_token;

    if (_token) {

      //will replace this with pushign this value to data layer using dispatch
      // setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })


      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // //printing user directly from spotify call
        // console.log("USER Details: ", user);

        dispatch({
          type: "SET_USER",
          user: user
          //or just user would be enough, but to make it more understandable
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })

    }

    // console.log("Token:", token);
    // to run only once, put empty brackets down here [] ,
    // if we want to run is such that when the name variable changes, use [name]
    // if we want to run is such that when the name, age, gender variables change, use [name, age, gender]
  }, []);

  //printing user directly from data layer
  // console.log("USER Details: ", user);
  // console.log("TOKEN: ",token);


  return (
    // BEM used here
    <div className="app">
      {
        token ? (
          // <h1>Welcome</h1>
          <Player spotify={spotify}/>
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
