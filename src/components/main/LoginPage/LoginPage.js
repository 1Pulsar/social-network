import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
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
            <Field name={'login'} placeholder={'Login'} component={'input'} />
            <Field name={'password'} placeholder={'Password'} component={'input'} />
            <Field name={'rememberMe'} component={'input'} type={'checkbox'} />
            <button>LogIn</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

export default LoginPage