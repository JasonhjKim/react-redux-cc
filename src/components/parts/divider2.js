import React, { Component } from 'react';
import styled from 'styled-components';

export default class Divider_2 extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: row;
		`

		const Card = styled.div `
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 0.75rem;
			margin: 1em;
			justify-content: center;
		`
		return(
			<Container style={{backgroundColor: this.props.color}}>
				<Card>
					<h5>Lorem ipsum</h5>
					<p>Explicabo dolorem nemo voluptates dignissimos</p>
				</Card>
				<Card>
					<h5>Lorem ipsum</h5>
					<p>Explicabo dolorem nemo voluptates dignissimos</p>
				</Card>
			</Container>
		)
	}
}