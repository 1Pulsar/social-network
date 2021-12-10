import React from "react";
import { ProfileSettingsReduxForm } from "./ProfileSettingsForm";
import { connect } from "react-redux";
import st from '../Settings.module.css'
const ProfileSettings = (props) => {
    const onSubmit = (profileSettingsFormData) => {
    }

    return <div>
        <h1>My profile settings</h1>
        <ProfileSettingsReduxForm />
    </div>
}

export const ProfileSettingsContainer = connect(null, null)(ProfileSettings)