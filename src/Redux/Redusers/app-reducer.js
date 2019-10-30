import {getAuthUserData} from './auth-reducer'
const INITITIALIZED_SUCCESS = 'app-reducer/INITITIALIZED-SUCCESS'

let initialState ={
    initialized: false
    
}

const appReducer = (state = initialState, action)=>{
 switch(action.type){
     case INITITIALIZED_SUCCESS:
         return {
             ...state, 
             initialized:true
         }
         default: 
         return state;
 }
}


export const initializedSuccess =()=>({type:INITITIALIZED_SUCCESS})

export const initializeApp = ()=>(dispatch)=>{
   let promise = dispatch(getAuthUserData());
//    dispatch(some())
//    dispatch(some())
Promise.all([promise]).then(()=>{
    dispatch(initializedSuccess())
})
   
}






export default appReducer;