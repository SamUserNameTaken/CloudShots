import React from 'react';

const TableData = (props) => (
	<tr>
		<td>
			<div>
				<p><strong>Class:</strong> {props.tdata.category}</p>
				<p><strong>Test:</strong> {props.tdata.pid}</p>
				<p><strong>Scenario:</strong> {props.tdata.location}</p>
			</div>
		</td>
		<td>hi</td>
		<td>hi</td>
		<td>hi</td>
		<td><button className="btn btn-primary" onClick={() => {console.log(props.tdata)}}>remove</button></td>
	</tr>
)

export default TableData;