import React, { Component } from 'react';
import styled from 'styled-components';
import Option from './option';
import Logo from '../components/logo'
import Color from './color';
import Primary from './primary'
import Secondary from './secondary'

export default class Sidebar extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;
			background-color: #f4f4f4;
			overflow-y: none;
			min-height: 100vh;
			width: 250px;
			position: fixed;
			overflow-y: scroll;
			top: 0;
			bottom: 0;

			@media (max-width: 780px) {
				display:none;
			}

		`
		const Wrapper = styled.div `
			margin-bottom: 1.5em;
		`

		const Title = styled.h4 `
			border-bottom: 1px solid black;
			font-family: raleway;
		`
		const LogoWrapper = styled.div `

		`
		return(
			<Container>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>

				<Wrapper>
					<Title>Components</Title>
					<Option />
				</Wrapper>

				<Wrapper>
					<Title>Primary</Title>
					<Primary />
				</Wrapper>

				<Wrapper>
					<Title>Secondary</Title>
					<Secondary />
				</Wrapper>

				<Wrapper>
					<Title>Color</Title>
					<Color />
				</Wrapper>
				
			</Container>
		)
	}
}