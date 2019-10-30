import React, {useEffect, useState} from 'react';


const ProfileStatus =(props)=>{


    const [editMode,changeEditMode] = useState(false)
    const [statusText,changeStatusText] = useState(props.status)

    let activateEditMode =()=>{
        changeEditMode(true)
    }

    let statusOnChange =(e)=>{
        changeStatusText(e.currentTarget.value)
    }
    let deactivateEditMode =()=>{
        changeEditMode(false);
        props.updateStatus(statusText)
    }


 
return(
<div>
{!editMode&&
<div>
        <span onDoubleClick={activateEditMode}>My status :{props.status|| '------'}</span>
    </div>}
    {editMode&&<div>
        <input autoFocus={true} onBlur={deactivateEditMode} onChange={statusOnChange} value={statusText}/>
    </div>}
    </div>
)
}

export default ProfileStatus;