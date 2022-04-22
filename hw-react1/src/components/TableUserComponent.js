import React from "react";
import TableItemComponent from "./TableItemComponent";
export default class TableUserComponent extends React.Component {
  render() {
    const { arrUser, handleDeleteAUser } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>ID User</th>
            <th>Email</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <TableItemComponent
          arrUser={arrUser}
          handleDeleteAUser={(item) => handleDeleteAUser(item)}
        />
      </table>
    );
  }
}
