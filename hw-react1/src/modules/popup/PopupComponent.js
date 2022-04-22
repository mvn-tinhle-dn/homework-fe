import React from "react";
import "./style.scss";
export default class PopupComponent extends React.Component {
  render() {
    const {
      confirm,
      handleOnCancel,
      handleOnConfirm,
      cancel = "cancel",
      submit = "submit",
    } = this.props;
    return (
      <>
        {confirm ? (
          <div className="popup">
            <div className="popup-header">
              <h3>Delete User</h3>
            </div>
            <div className="popup-content">
              <p>Are you sure?</p>
            </div>
            <div className="popup-footer">
              <button className="btn btn-cancel" onClick={handleOnCancel}>
                {cancel}
              </button>
              <button className="btn btn-delete" onClick={handleOnConfirm}>
                {submit}
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
