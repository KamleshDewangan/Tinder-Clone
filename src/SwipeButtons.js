import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CloseIcon from '@material-ui/icons/Close'
import  './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'


function SwipeButtons() {
    return (
        <div className="swipebuttons">
            <IconButton className="swipebuttons__repeat" > <ReplayIcon  fontSize="large"/></IconButton>
            <IconButton className="swipebuttons__left"> <CloseIcon fontSize="large"/></IconButton>
            <IconButton className="swipebuttons__star"><StarRateIcon fontSize="large" /></IconButton> 
            <IconButton className="swipebuttons__right"><FavoriteIcon fontSize="large"/></IconButton> 
            <IconButton className="swipebuttons__flash"> <FlashOnIcon fontSize="large"/></IconButton>
           
           
           
            
            
        </div>
    )
}

export default SwipeButtons
