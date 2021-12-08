import React, { useEffect, useState } from "react";
import st from "./Status.module.css"

const Status = (props) => {

    const [statusEditMode, isStatusEdit] = useState(false)
    const [localStorageStatus, changeLocalStorageStatus] = useState(props.status)

    useEffect(() => {
        changeLocalStorageStatus(props.status)
    }, [props.status])

    const saveNewStatusToGlobal = () => {
        isStatusEdit(false)
        props.newStatusThunk(localStorageStatus)
    }

    const statusOnChange = (event) => {
        changeLocalStorageStatus(event.target.value)
    }

    return (
        <div>
            {!statusEditMode &&
                <p className={st.statusText} onDoubleClick={() => isStatusEdit(true)}>{props.status ? props.status : 'No status'}</p>}
            {statusEditMode &&
                <div className={st.inputWrapper}><input className={st.statusInput} onBlur={saveNewStatusToGlobal} onChange={statusOnChange} autoFocus={true}
                    value={localStorageStatus} /></div>}
        </div>
    )
}

export default Status