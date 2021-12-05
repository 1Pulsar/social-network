import React, {useEffect, useState} from "react";

function Status(props) {

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
            <p onDoubleClick={() => isStatusEdit(true)}>{props.status ? props.status : 'No status'}</p>}
            {statusEditMode &&
            <input onBlur={saveNewStatusToGlobal} onChange={statusOnChange} autoFocus={true}
                   value={localStorageStatus}/>}
        </div>
    )
}

export default Status