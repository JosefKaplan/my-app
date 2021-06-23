import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#f3a1b3"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#ee8c8b"}}/>} />
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #f27294"}}/>} />
          <BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#80495f"}}/>} />
        </BottomNavigation>
)
}

export default Footer