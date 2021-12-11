import React from 'react'
import { NavLink } from 'react-router-dom'
import st from './Settings.module.css'
import {Route} from "react-router-dom";
import SuspenseWrapper from '../../../common/SuspenseWrapper';
import {ProfileSettingsContainer} from './ProfileSettings/ProfileSettings';
import CommonNavlink from '../../../common/commonStyles/CommonNavlink';

const Settings = () => {
    return (
        <div className={st.content}>
            <div className={st.settingsCategoryWrapper}>
                <h1>Settings</h1>
                <CommonNavlink to= '/settings/myprofile' width='100%' height='30px' innerLinkText='MyProfile Settings'/>
            </div>
            <div className={st.settingsParametersWrapper}>
                <Route path='/settings/myprofile' render={SuspenseWrapper(ProfileSettingsContainer)}/>
            </div>
        </div>
    )
}

export default Settings