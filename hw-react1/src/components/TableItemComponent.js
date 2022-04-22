import React from "react";

export default class TableItemComponent extends React.Component {
	render() {
		const { arrUser, handleDeleteAUser } = this.props;
		return (
			<tbody>
				{arrUser.map((item, index) => (
					<tr key={item.id}>
						<td>{index + 1}</td>
						<td>{item.id}</td>
						<td>{item.email}</td>
						<td>{item.country}</td>
						<td>{item.gender === 0 ? `Male` : `FeMale`}</td>
						<td>{item.info}</td>
						<td>
							<button className="btn-delete" onClick={() => handleDeleteAUser(item)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		);
	}
}
