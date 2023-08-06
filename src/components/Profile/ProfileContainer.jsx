import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setProfile } from '../../redux/profile-reducer'
import axios from 'axios'

class ProfileConatainer extends React.Component {
  componentDidMount() {
   axios.get('https://social-network.samuraijs.com/api/1.0/profile/2') 
    .then((res) => {
      this.props.setProfile(res.data)
    })
  }
  render() {
    return (<Profile {...this.props} profile={this.props.profile}/>)
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, {setProfile}) (ProfileConatainer);
