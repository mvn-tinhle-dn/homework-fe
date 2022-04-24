import React from "react";
import TableItemComponent from "./TableItemComponent";
export default class TableUserComponent extends React.Component {
  render() {
    const { arrUser, getIdUser } = this.props;
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
          getIdUser={(item) => getIdUser(item)}
        />
      </table>
    );
  }
}
