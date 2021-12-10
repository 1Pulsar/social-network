import React from "react";
import st from './defaultForms.module.css'

export const Textarea = ({ meta, input, className, ...props }) => {
    const errorTest = meta.visited && meta.error
    return (
        <div>
            {errorTest && <span className={st.errorNotification}>{meta.error}</span>}
            <textarea {...input} {...props} className={`${className} ${errorTest ? st.textareaError : ''}`} />
        </div>
    )
}
export const Input = ({ meta, input, className, ...props }) => {
    const errorTest = meta.visited && meta.error
    return (
        <div>
            {errorTest && <div><span className={st.errorNotification}>{meta.error}</span></div>}
            <input {...input} {...props} className={`${errorTest ? st.textareaError : ''}`} />
        </div>
    )
}
