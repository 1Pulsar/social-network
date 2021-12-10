import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthValidCreator } from "../../../../validators/reduxFormValidators";
import { Input, Textarea } from "../../../../common/defaultForms/defaultForms";
import st from '../Settings.module.css'
import commonStyles from '../../../../common/commonStyles/CommonStyles.module.css';

const ProfileSettingsForm = (props) => {
    const maxInputFieldLength = maxLengthValidCreator(100)
    const fieldCreator = (name, component, type, placeholder, className, validate, value) => {
        return <Field name={name} component={component} type={type} placeholder={placeholder}
            className={className} validate={validate} props={{value, className}}/>
    }
    const contactsListArray = ['Facebook', 'WebSite', 'VK', 'Twitter', 'Instagram', 'YouTube', 'GitHub']

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                {fieldCreator('aboutMe', Textarea, null, 'Enter some information about You...', commonStyles.commonTextArea, [maxInputFieldLength])}
            </div>
            <div>
                <p>Looking for a job</p>
                {fieldCreator('lookingForAJob', 'input', 'checkbox', null, null, [])}
            </div>
            <div>
                {fieldCreator('lookingForAJobDescription', Textarea, null, 'Enter some information about your professional skills...', null, [maxInputFieldLength])}
            </div>
            <div>
                {contactsListArray.map(contactName => <div>
                    <p>{contactName}</p>
                    {fieldCreator(contactName.toLowerCase(), Input, null, `https://${contactName.toLowerCase()}.com/...`, null, [])}
                </div>)}
            </div>
            <button>Save Changes</button>
        </form>
    </div>
}

export const ProfileSettingsReduxForm = reduxForm({ form: 'profileSettings' })(ProfileSettingsForm)