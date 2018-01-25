import React, { Component } from 'react';
import styled from 'styled-components';


export default class TopNav extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const Nav = styled.div `
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			max-width: 1024px;
			align-items: center;
			border: 1px solid black;
			color: white;
		`

		const Wrapper = styled.div `
			display: flex;
			flex-direction: row;
			list-style-type: none;

		`
		const Li = styled.li `
			padding: 1em 2em
		`
		console.log(this.props.index);
		return(
			<Nav style={{backgroundColor: this.props.primary[0], color: this.props.fontColor}}>
				<Wrapper>
					<Li>Logo</Li>
				</Wrapper>

				<Wrapper>
					<Li>Home</Li>
					<Li>Contact</Li>
					<Li>About</Li>
				</Wrapper>

				<Wrapper>
				 <Li>Login</Li>
				 <Li>Signup</Li>
				</Wrapper>
			</Nav>

		)
	}
}
