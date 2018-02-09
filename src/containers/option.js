import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushLayer, popLayer } from '../actions/index';
import RandomButton from './random_button';

class Option extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.loadDefault = this.loadDefault.bind(this);
	}

	handleChange(e) {
		this.setState({
			selected: e.target.value
		})
		console.log(e.target.value);
	}

	handleSubmit(e) {
		this.props.pushLayer(this.props.parts[this.state.selected]);
		e.preventDefault();
	}

	handleClick(e) {
		this.props.popLayer();
		e.preventDefault();
	}

	loadDefault(e) {
		this.props.pushLayer(this.props.parts["topnav"])
		this.props.pushLayer(this.props.parts["hero"])
		this.props.pushLayer(this.props.parts["item_3"])
		this.props.pushLayer(this.props.parts["video"])
		this.props.pushLayer(this.props.parts["footer"])
	}

	render() {
		const Container = styled.div `
			width: 100%;
			font-family: raleway;
		`

		const Button = styled.button `
			border-radius: 8px;
			background: white;
			border: 2px solid bluegray;
			width: 100%;
			margin-top: 0.25em;
			padding: 0.25em 0;
			box-shadow: 0.25px 0.25px 0.25px gray;
		`

		const Select = styled.select `
			width: 175px;
			border: 2px solid bluegray;
			background-color: white;
			border-radius: 8px;

		`
		const optionList = Object.keys(this.props.parts).map((key,index) => (
				<option style={{fontSize:"0.75em"}}value={key} key={index}>{key}</option>
			))
		return(
			<Container>
				<form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"row"}}>
					<Select onChange={this.handleChange} value={this.state.selected}>
						<option defaultValue>Choose...</option>
						{optionList}
					</Select>
					<Button type="submit" style={{flex:1}}>Push</Button>
				</form>
				<Button onClick={this.handleClick}>Pop</Button>
				<Button onClick={this.loadDefault}>Load Default</Button>
				<RandomButton />
			</Container>
		)
	}
}


function mapStateToProps(state) {
	return {
		parts: state.parts,
		renderParts: state.renderParts
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ pushLayer, popLayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Option)

