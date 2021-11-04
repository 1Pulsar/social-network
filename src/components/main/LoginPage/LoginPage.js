import React from "react";
import {Field, reduxForm} from "redux-form";
import {submitLoginDataThunk} from "../../../Redux/Reducer/AuthReducer";

const LoginPage = (props) => {
    const onSubmit = (loginFormData) => {
        console.log(loginFormData)
        submitLoginDataThunk(loginFormData)
    }

    return (
        <div>
            Login page
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'email'} placeholder={'Login'} component={'input'} />
            <Field name={'password'} placeholder={'Password'} component={'input'} />
            <Field name={'rememberMe'} component={'input'} type={'checkbox'} />
            <button>LogIn</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

export default LoginPage