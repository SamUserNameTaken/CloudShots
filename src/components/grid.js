import React, { Component } from 'react';
import TableData from './table_data';
import { fetchList } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Grid extends Component {
	componentDidMount(){
		this.props.fetchList()
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

function mapStateToProps(state) {
	return { list: state.lists.all }
}

export default connect(mapStateToProps, { fetchList })(Grid);