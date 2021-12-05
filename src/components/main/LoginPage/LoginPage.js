import React from "react";
import {Field, reduxForm} from "redux-form";
import {submitLoginDataThunk} from "../../../Redux/Reducer/AuthReducer";
import st from "./LoginPage.module.css"
import {Input} from "../../common/defaultForms/defaultForms";
import {isWritten} from "../../validators/reduxFormValidators";
import {connect} from "react-redux";

const LoginPage = (props) => {

    const onSubmit = (loginFormData) => {
        console.log(loginFormData)
        props.submitLoginDataThunk(loginFormData)
    }

    return (
        <div>
            Login page
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginPageContainer = connect(null, {submitLoginDataThunk})(LoginPage)

const LoginForm = (props) => {
    return (
        <div className={st.mainContainer}>
            <form onSubmit={props.handleSubmit}>
                <Field name={'email'} placeholder={'Login'} component={Input} validate={isWritten}/>
                <Field name={'password'} placeholder={'Password'} type={'password'} component={Input} validate={isWritten}/>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
                <button>LogIn</button>
            </form>
            {props.error && <div className={st.submitErrorMessage}>
                <span>{props.error}</span>
            </div>}
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
