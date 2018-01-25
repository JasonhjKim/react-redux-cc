import React, { Component } from 'react';
import styled from 'styled-components';

export default class Item_3 extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: auto;
			align-items: center;
			margin: 1em;
		`

		const Card = styled.div `
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 1px solid black;
			border-radius: 1em;
			margin: 0 1em 1em 1em;
			justify-content: space-around;
			min-height: 400px;
			text-align: center;

		`

		const style = {
			backgroundColor: this.props.primary[1],
			color: this.props.fontColor
		}

		const Button = styled.button `
			background-color: ${this.props.secondary[1]};
			padding: 0.5em 2em;
			border-radius: 8px;
			margin: 1em;
		`

		const Img = styled.div `
			width: 10em;
			height: 10em;
			background-color: ${this.props.primary[2]};
			border-radius: 8px;
			margin: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
		`

		const element = (
				<Card style={style}>
					<Img>*img</Img>
					<h5>Lorem ipsum</h5>
					<p style={{fontSize:"1em", marginBottom:"0"}}>Loluptatum totam incidunt deserunt, labore nam itaque ipsa quidem quas.</p>
					<Button>More</Button>
				</Card>
			)
		return(
			<Container>
				<div>
					<p style={{margin: "0 1em 1em 1em", borderBottom:"1px solid black", fontSize:"1.5em"}}>Our work</p>
				</div>
				<div style={{display:"flex", flexDirection:"row"}}>
					{element}
					{element}
					{element}
				</div>
			</Container>
		)
	}
}