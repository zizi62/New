import React, {Suspense} from 'react'
// import Users from './Users';
import { connect } from 'react-redux';
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC,
    toggleIsFollowingAC,
    getUsersThunkCreater,
    unfollowThunkCreater,
    followThunkCreater
} from '../../Redux/Redusers/UsersReducer'
import Preloader from '../common/preloader/preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/users-selectors/users-selectors'


const Users = React.lazy(() => import('./Users'));


class UsersContaner extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreater(pageNumber, this.props.pageSize)

    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Suspense fallback={<div>Загрузка...</div>}>
                <Users
                    {...this.props}
                    onPageChanged={this.onPageChanged} />
            </Suspense>

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)


    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
        setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
        toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) },
        toggleIsFollowing: (isFetching) => { dispatch(toggleIsFollowingAC(isFetching)) },
        getUsersThunkCreater: (currentPage, pageSize) => { dispatch(getUsersThunkCreater(currentPage, pageSize)) },
        unfollowThunkCreater: (id) => { dispatch(unfollowThunkCreater(id)) },
        followThunkCreater: (id) => { dispatch(followThunkCreater(id)) }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContaner);