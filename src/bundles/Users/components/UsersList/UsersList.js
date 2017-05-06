import React, { Component } from 'react';
import UsersListItemContainer from '../UsersListItem/UsersListItem';

export default class UsersList extends Component {
	render() {
		const { users } = this.props;
		// const users = this.props.users;

		return (
			<div>
				{ users.map(e => <UsersListItemContainer key={e.id} user={e} />)}
			</div>
		)
	}
}