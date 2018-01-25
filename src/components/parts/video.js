import React, { Component } from 'react';
import styled from 'styled-components';

export default class Video extends Component {
	render() {
		const Container = styled.div `
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #FFFFFF;
			flex-direction: column;
			border: 1px solid black;
		`

		const Video = styled.div `
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30vw;
			height: 30vh;
			margin: 2em 7em 5em 7em;
			background-color: ${this.props.primary[2]};
		`

		const Li = styled.li `
			list-style-type: none;
			font-size: 1.5em;
			border-bottom: 1px solid ${this.props.fontColor};

		`

		const style = {
			backgroundColor: this.props.index > 1 && this.props.index % 2 === 0
				? "white" : this.props.primary[1],
			color: this.props.fontColor
		}

		return(
			<Container style={style}>
				<Li>Our Video</Li>
				<Video>*video</Video>
			</Container>
		)
	}
}