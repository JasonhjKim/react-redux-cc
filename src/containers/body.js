import React, { Component } from 'react';
import { connect} from 'react-redux';
import styled from 'styled-components';

class Body extends Component {
	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 4;
			max-width: 100%;
			overflow-y: auto;
			margin-left: 250px;
			min-height: 100vh;
			background: #F5F5F5;
			@media (max-width: 960px) {
	      		margin-left: 250px;
	      	}
	      	@media (max-width: 780px) {
	      		margin: 0 auto;
	      	}
		`

		const Wrapper = styled.div `
			max-width: 1024px;
			display: flex;
			flex-direction: column;
			background-color: white;
			border: 1px solid #D0D0D0;
		`

		const renderList = this.props.renderParts.map((Part, index) => (
				<Part key={index} 
					primary={this.props.primary.length < 1 ? ["#ffffff", "#ffffff", "#ffffff"] : this.props.primary[this.props.primary.length - 1]} 
					secondary={this.props.secondary.length < 1 ? ["#ffffff", "#ffffff", "#ffffff"] : this.props.secondary[this.props.secondary.length - 1]}
					fontColor={this.props.primary.length < 1 ? "black" : "white"}
					index={index}
					/>
			))
		return(
			<Container>
				<Wrapper>
					{renderList}
				</Wrapper>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		renderParts: state.renderParts,
		color: state.color,
		primary: state.primary,
		secondary: state.secondary
	}
}

export default connect(mapStateToProps)(Body)