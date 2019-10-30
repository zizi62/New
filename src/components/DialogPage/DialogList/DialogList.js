import React from 'react'



const DialogList = (props) =>{
    let state = props.store.getState().dialogPage
    return (
        <div className ={style.namesList}>
            {state.dialogList.map((dialogName) => {
                return <NavLink  
                 to ={'/dialogs/'+ dialogName.id }  className={style.item} 
                 key ={dialogName.id}  
                 activeClassName = {style.active}> {dialogName.name}
                 </NavLink>
            }
                 )}
    
    </div>
    )
}


export default DialogList;