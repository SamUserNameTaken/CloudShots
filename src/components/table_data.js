import React from 'react';

const TableData = (props) => (
	<tr>
		<td className="row-desc">
			<div>
				<p><strong>Class:</strong> qwlekjqw eiqjweoiqwejlkqwje lqkwejqwoie{props.tdata.category}</p>
				<p><strong>Test:</strong> lqjwelkqjwe lkqjwe{props.tdata.pid}</p>
				<p><strong>Scenario:</strong> qlkwejqklwe jklqwej{props.tdata.location}</p>
			</div>
		</td>
		<td><img className="img-fluid" src="./images/pic1.png" alt="uh ya"/></td>
		<td><img className="img-fluid" src="./images/pic1.png" alt="uh ya"/></td>
		<td><img className="img-fluid" src="./images/pic1.png" alt="uh ya"/></td>
		<td className="table-btn"><button className="btn btn-primary" onClick={() => {console.log(props.tdata)}}>remove</button></td>
	</tr>
)

export default TableData;