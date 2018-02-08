import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Palette extends Component {
    render() {
        const Container = styled.div `
            display: flex;
            flex-direction: row;
            width: 100%;
        `
        const Color = styled.div `
            flex: 1;
            width: 56px;
            height: 150px;
            border: 0.25px solid #D0D0D0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.75em;
            color: white;
        `
        const primary = this.props.primary[this.props.primary.length - 1];
        const secondary = this.props.secondary[this.props.secondary.length - 1]
        return(
            <Container>
                <Color style={{backgroundColor: this.props.primary.length < 1 ? "#ffffff" : primary[0]}}>{this.props.primary.length < 1 ? "#ffffff" : primary[0]}</Color>
                <Color style={{backgroundColor: this.props.primary.length < 1 ? "#ffffff" : primary[1]}}>{this.props.primary.length < 1 ? "#ffffff" : primary[1]}</Color>
                <Color style={{backgroundColor: this.props.primary.length < 1 ? "#ffffff" : primary[2]}}>{this.props.primary.length < 1 ? "#ffffff" : primary[2]}</Color>
                <Color style={{backgroundColor: this.props.secondary.length < 1 ? "#ffffff" : secondary[0]}}>{this.props.secondary.length < 1 ? "#ffffff" : secondary[0]}</Color>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        primary: state.primary,
        secondary: state.secondary
    }
}

export default connect(mapStateToProps)(Palette);