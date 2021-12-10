import React from "react";
import st from './Information.module.css';
import facebookIcon from "../../../../../images/ContactIcons/FacebookIcon.png"
import gitHubIcon from "../../../../../images/ContactIcons/GitHubIcon.png"
import instagramIcon from "../../../../../images/ContactIcons/InstagramIcon.png"
import twitterIcon from "../../../../../images/ContactIcons/TwitterIcon.png"
import vkIcon from "../../../../../images/ContactIcons/VKIcon.png"
import webSiteIcon from "../../../../../images/ContactIcons/WebSiteIcon.png"
import youtubeIcon from "../../../../../images/ContactIcons/YoutubeIcon.png"

const Contacts = ({contacts}) => {

    return <div>
        <h2>~My contacts~</h2>
        <div className={st.contactIconsWrapper}>
            <a href={'https://uk-ua.facebook.com/'}><img src={facebookIcon}/></a>
            <a href={''}><img src={webSiteIcon}/></a>
            <a href={''}><img src={vkIcon}/></a>
            <a href={''}><img src={twitterIcon}/></a>
            <a href={''}><img src={instagramIcon}/></a>
            <a href={''}><img src={youtubeIcon}/></a>
            <a href={''}><img src={gitHubIcon}/></a>
        </div>
    </div>
}

export default Contacts