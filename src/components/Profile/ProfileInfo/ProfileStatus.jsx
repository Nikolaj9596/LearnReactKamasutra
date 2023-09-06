import React from "react";
import style from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status,
    });
  };

  deactiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status != this.props.status){
      this.setState({ status: this.props.status });
    }
  };

  render() {
    return (
      <div className={style.selectorName}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode} className={style.status}>
              {this.props.status || "-----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactiveEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
