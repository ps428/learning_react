import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";


function Footer() {

  return (
    <div className='footer'>
      <div className='footer__left'>
        {/* Album and song details */}
        <img className='footer__songImage' src="https://i9.ytimg.com/s_p/OLAK5uy_lETFVJpMIzAv8UCcYN6AZd7KLFaq2tRlc/mqdefault.jpg?sqp=CJC2spIGir7X7AMGCPuzy40G&rs=AOn4CLA7FcRVokJPnHFf3XZVNBnzG2rNlg&v=1639111163" alt="album_image" />
        <div className='footer__songInfo'>
          <h4>Ek Raat</h4>
          <p>Vilen</p>
        </div>
      </div>

      <div className='footer__center'>
        {/* Player controls */}
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
        {/* Volume controls */}
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Footer