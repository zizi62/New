import {usersAPI, profileAPI} from '../../api/api'



const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'


let initialState = {
    postData: [
        { id: 1, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png', message: 'Who are you?', like: 100 },
        { id: 2, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png', message: 'Who are you?', like: 144 },
        { id: 3, ava: 'https://img1.picmix.com/output/stamp/normal/1/6/4/0/660461_8040a.png', message: 'Hello', like: 120 },
        { id: 4, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png', message: 'Who are you?', like: 111 }
    ],
    profile:null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 6,
                    ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png',
                    message: action.newPostText,
                    like: 0
                }

                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
                }
                // let stateCopy = {...state}
                // stateCopy.postData = [...state.postData]
                // stateCopy.postData.push(newPost)
                // stateCopy.newPostText = '';
                // return stateCopy;
            }


        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return{...state, status: action.status}

        default:
            return state
    }

}
export const addPostActionCreator = (text) => ({ type: ADD_POST, newPostText:text })
export const setUserProfileAC = (profile)=>({type: SET_USER_PROFILE, profile: profile})
export const setUserStatus = (status)=>({type: SET_STATUS, status: status})


export const getStatus = (userId) => async(dispatch)=> {
    let response = await profileAPI.getUserStatus(userId)
    
    dispatch(setUserStatus(response.data))
        
}

export const updateStatus = (status) => async (dispatch)=> {

 let response = await profileAPI.updateUserStatus(status)
        if(response.data.resultCode ===0)
        dispatch(setUserStatus(status))
 
}

export const getUserProfile = (userId) => async (dispatch)=> {
    let response = await  usersAPI.getProfile(userId)
            dispatch(setUserProfileAC(response.data))
        
}

export default profileReducer;