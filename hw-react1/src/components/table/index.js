import React from "react";

export default function TableUserComponent(props) {
  const { arrUser, handleDeleteAUser } = props;
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
      <tbody>
        {arrUser.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.country}</td>
            <td>{item.gender === "0" ? `Male` : `FeMale`}</td>
            <td>{item.info}</td>
            <td>
              <button
                className="btn-delete"
                onClick={() => {
                  handleDeleteAUser(item);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
