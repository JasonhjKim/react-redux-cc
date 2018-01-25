import React, { Component } from 'react';
import styled from 'styled-components';

export default class Hero extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			color: white;
			border: 1px solid black;
		`

		const P = styled.p `
		`

		const Button = styled.button `
			border: 1px solid black;
			padding: 0.7em 3em;
			border-radius: 10px;

		`
		console.log(this.props.index);
		return(
			<Container style={{backgroundColor: this.props.primary[1], color:this.props.fontColor}}>
				<div style={{padding: "7.8rem"}}>
					<h3>Lorem ipsum dolor sit amet!</h3>
					<P>consectetur adipisicing elit. Explicabo dolorem nemo voluptates dignissimos, nostrum molestiae assumenda fugit rem at vero numquam doloribus cumque cumque</P>
					<Button style={{backgroundColor: this.props.secondary[1]}}>More Info</Button>
				</div>
			</Container>
		)
	}
}