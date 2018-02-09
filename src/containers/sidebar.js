import React, { Component } from 'react';
import styled from 'styled-components';
import Option from './option';
import Logo from '../components/logo'
import Primary from './primary'
import Secondary from './secondary'
import Palette from './palette';

export default class Sidebar extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;
			background-color: #f4f4f4;
			min-height: 100vh;
			width: 250px;
			position: fixed;
			overflow-y: auto;
			top: 0;
			bottom: 0;
			border-right: 1px solid black;

			@media (max-width: 780px) {
				display:none;
			}

		`
		const Wrapper = styled.div `
			margin-bottom: 1.5em;
			width: 230px;
		`

		const Title = styled.h4 `
			border-bottom: 1px solid black;
			font-family: raleway;
			text-align: left;
		`
		const LogoWrapper = styled.div `
		`

		const P = styled.p `
			margin: 0;
			padding: 0;
			text-align: right;
		`
		const H4 = styled.h4 `
			margin: 0;
			padding: 0;
			text-align: center;
		`
		return(
			<Container>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>

				<Wrapper>
					<H4>Color Theme Picker</H4>
					<P>by H.J.K</P>
				</Wrapper>

				<Wrapper>
					<Title>Palette</Title>
					<Palette />
				</Wrapper>

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
			</Container>
		)
	}
}