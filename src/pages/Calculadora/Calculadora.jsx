import React, { Component } from 'react';
import Form from '../../components/Form/Form';

export default class Calculadora extends Component {

    state = {
        num1: 0,
        num2: 0,
        calculo: 0,
    }

    constructor(props) {
        super(props);
        this.soma = this.soma.bind(this);
        this.subtracao = this.subtracao.bind(this);
        this.multiplicacao = this.multiplicacao.bind(this);
        this.divisao = this.divisao.bind(this);
    }

    onNumUmChanged = (e) => {
        this.setState({ num1: +e.target.value });
    }

    onNumDoisChanged = (e) => {
        this.setState({ num2: +e.target.value });
    }

    soma = (e) => {
        e.preventDefault();
        this.setState({ calculo: this.state.num1 + this.state.num2 });
    }

    subtracao = (e) => {
        e.preventDefault();
        this.setState({ calculo: Math.abs(this.state.num1 - this.state.num2) });
    }

    multiplicacao = (e) => {
        e.preventDefault();
        this.setState({ calculo: this.state.num1 * this.state.num2 });
    }

    divisao = (e) => {
        e.preventDefault();
        if( this.state.num1 == 0 || this.state.num2 == 0 || (this.state.num1 > this.state.num2) ) {
            this.setState({ calculo: 0 });
        }
        this.setState({ calculo: this.state.num1 / this.state.num2 });
    }

    render() {
        return (
            <div className='card'>
                <Form 
                    num1={this.state.num1} 
                    num2={this.state.num2} 
                    onNumUmChanged={e => this.onNumUmChanged(e)}
                    onNumDoisChanged={e => this.onNumDoisChanged(e)}
                    soma={(e) => this.soma(e)}
                    subtracao={(e) => this.subtracao(e)}
                    multiplicacao={(e) => this.multiplicacao(e)}
                    divisao={(e) => this.divisao(e)}
                    calculo={(this.state.calculo).toFixed(2)}
                />
            </div>
        );
    }
}
