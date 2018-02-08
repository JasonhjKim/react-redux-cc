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
			height: 500px;
			flex-wrap: wrap;
		`

		const P = styled.p `
			display: flex;
			flex-wrap: wrap;
			word-wrap: break-word;
			white-space: initial;
			flex: 1;
			min-width: 10%;
		`

		const Button = styled.button `
			border: 1px solid black;
			padding: 0.7em 3em;
			border-radius: 10px;
			flex: 1;
		`
		const Wrapper = styled.div `
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 75%;
			
		`
		const H3 = styled.h3 `
			flex: 1;
		`
		return(
			<Container style={{backgroundColor: this.props.primary[1], color:this.props.fontColor}}>
				<Wrapper>
					<H3>Lorem ipsum dolor sit amet!</H3>
					<P>consectetur adipisicing elit. Explicabo dolorem nemo voluptates dignissimos, nostrum molestiae assumenda fugit rem at vero numquam doloribus cumque cumque</P>
					<Button style={{backgroundColor: this.props.secondary[1]}}>More Info</Button>
				</Wrapper>
			</Container>
		)
	}
}