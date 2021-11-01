import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import s from "./Users.module.css";
import {
    follow, getUsersThunkCreator, onPageChangedThunkCreator,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props}
                   onPageChanged={this.onPageChanged}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (page) => {
            dispatch(setTotalUsersCountAC(page))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
    follow: follow,
    unfollow,
    toggleFollowingProgress,
    getUsersThunkCreator,
    onPageChangedThunkCreator,

})(UsersContainer);