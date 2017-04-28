import React from 'react';

const TableData = () => (
	<tr>
		<td>
			<div>
				<p><strong>Class:</strong></p>
				<p><strong>Test:</strong></p>
				<p><strong>Scenario:</strong></p>
			</div>
		</td>
		<td>hi</td>
		<td>hi</td>
		<td>hi</td>
		<td><button className="btn btn-primary" onClick={() => {console.log("suh")}}>remove</button></td>
	</tr>
)

export default TableData;