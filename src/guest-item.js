import React, { Component } from 'react';

class GuestItem extends Component {
	state = {
		arrived: false
	}

	checkGuest = (e) => {
		this.setState({
			arrived: e.target.checked
		})
	}

	render() {
		const { arrived } = this.state;
		const { guest } = this.props;
		const { checkGuest } = this;

		return (
			<li className={ arrived ? "guests-list__item guests-list__item_arrived" : "guests-list__item" }>
				{ guest.name }

				<input type="radio" onChange={checkGuest} />
			</li>
		);
	}
}

export default GuestItem;