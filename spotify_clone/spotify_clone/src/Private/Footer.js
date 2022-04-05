import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from '../DataLayer';


function Footer() {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  return (
    <div className='footer'>
      <div className='footer__left'>
        {/* Album and song details */}
        <img src="" alt="album_image" />
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