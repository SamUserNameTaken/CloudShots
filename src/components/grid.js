import React, { Component } from 'react';
import TableData from './table_data';
import { fetchList } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Grid extends Component {
	componentDidMount(){
		this.props.fetchList()
	}
	renderTables() {
		return this.props.list.map((items) => {
			return <TableData tdata={items} />
		})
	}
	render() {
		console.log(this.props)
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