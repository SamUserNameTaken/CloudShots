import React, { Component } from 'react';
import TableData from './table-data';

class Grid extends Component {
	render() {
		return (
			<div className="container">
				<table className="table">
					<tbody>
						<tr>
							<th></th>
							<th>Base</th>
							<th>Failure</th>
							<th>Difference</th>
						</tr>
						<TableData />
						<TableData />
						<TableData />
						<TableData />
					</tbody>
				</table>
			</div>
		)
	}
}

export default Grid;