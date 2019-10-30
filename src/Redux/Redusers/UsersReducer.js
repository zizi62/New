import { usersAPI } from '../../api/api';
import {updateObjectInArray} from '../../utils/obgect-maker'
const USER_FOLLOW = 'USER-FOLLOW'
const USER_UNFOLLOW = 'USER-UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FOLLOW: {

            return {
                
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}  )
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })
            }
        }
        case USER_UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false}  )
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }


        default:
            return state;
    }


}



export const followAC = (id) => ({ type: USER_FOLLOW, userId: id })
export const unFollowAC = (id) => ({ type: USER_UNFOLLOW, userId: id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching })
export const toggleIsFollowingAC = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: id })



export const getUsersThunkCreater = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
    dispatch(setCurrentPageAC(currentPage))
}

const followUnfollowFlow = async (dispatch, id, method,actionCreator )=> {
    dispatch(toggleIsFollowingAC(true, id));
    let res = await   method(id)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowingAC(false, id))
}



export const followThunkCreater = (id) => async (dispatch) => {
    let method= usersAPI.follow.bind(usersAPI)
    let actionCreator = followAC
    followUnfollowFlow(dispatch, id, method,actionCreator )
        
}


export const unfollowThunkCreater = (id) => async (dispatch) => {
    let method= usersAPI.unFollow.bind(usersAPI)
    let actionCreator = unFollowAC
    followUnfollowFlow(dispatch, id, method,actionCreator )
        
}
export default userReducer;

