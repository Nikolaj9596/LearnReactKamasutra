import React from "react";
import { connect } from "react-redux";
import {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers
} from "../../redux/user-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          users={this.props.users}
          pageSize={this.props.pageSize}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers
})(UsersApiComponent);
