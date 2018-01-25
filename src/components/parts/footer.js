import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: row;
		`

		const Card = styled.div `
			display: flex;
			flex-direction: column;
			flex: 1;
			text-align: center;
			padding: 4em 3em;
			list-style-type: none;
		`
		const Li = styled.li `
			font-size: 0.75em;
			padding: 0.25em;
		`

		const Head = styled.li `
			list-style-type: none;
			padding: 0.50em;
		`
		return(
			<Container style={{backgroundColor: this.props.primary[0], color: this.props.fontColor}}>
				<Card>
					<Head>About Pavilion</Head>
					<Li>Get to know us</Li>
					<Li>Promos</Li>
					<Li>Become a retailer</Li>
					<Li>Job openings</Li>
					<Li>Events</Li>
				</Card>
				<Card>
					<Head>The Gift Selection</Head>
					<Li>Angel Figurines</Li>
					<Li>Home Decor</Li>
					<Li>Mugs</Li>
					<Li>Pet Lover</Li>
					<Li>Handbags & Jewelry</Li>
				</Card>
				<Card>
					<Head>Please Help Me</Head>
					<Li>Contact</Li>
					<Li>FAQ</Li>
					<Li>Store Locator</Li>
					<Li>New Users</Li>
					<Li>Order Status</Li>
				</Card>
			</Container>
		);
	}
}