import React from "react";
import st from './defaultForms.module.css'

export const Textarea = ({meta, input, className, ...props}) => {
    debugger
    const errorTest = meta.visited && meta.error
    return (
        <div style={{width: '600px'}}>
            {errorTest && <span className={st.errorNotification}>{meta.error}</span>}
            <textarea {...input} {...props} className={`${st.newPostTextArea} ${errorTest ? st.textareaError : ''}` } />
        </div>
    )
}