import React, { Component } from 'react';
import TableData from './table_data';
import { fetchList } from '../actions'
import { connect } from 'react-redux';

class Grid extends Component {
	componentDidMount(){
		// this.props.fetchList()
	}
	renderTables() {
		return [1, 2, 3].map((items, i) => {
		// return this.props.list.map((items, i) => {
			return <TableData key={items + i} tdata={items} />
		})
	}
	render() {
		console.log(this.props)
		return (
			<div style={{margin:"20px"}} className="container-fluid">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th></th>
							<th>Base</th>
							<th>Failure</th>
							<th>Difference</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{this.renderTables()}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { list: state.lists.all }
}

export default connect(mapStateToProps, { fetchList })(Grid);