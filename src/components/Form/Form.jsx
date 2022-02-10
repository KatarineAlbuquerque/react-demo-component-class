import React from 'react';
import Botoes from '../Botoes/Botoes';
import Inputs from '../Inputs/Inputs';

const Form = (props) => {
    return (
        <div>
            <h3>Informe dois números:</h3>
            
            <form>                
                <Inputs 
                    num1={props.num1} 
                    num2={props.num2} 
                    onNumUmChanged={props.onNumUmChanged}
                    onNumDoisChanged={props.onNumDoisChanged}
                />
                <Botoes 
                    soma={props.soma}
                    subtracao={props.subtracao}
                    multiplicacao={props.multiplicacao}
                    divisao={props.divisao}
                />
            </form>
            
            {isNaN(props.calculo) || props.calculo === 'Infinity' ? <h3>Total : {0}</h3> : <h3>Total : {props.calculo}</h3> }
            
        </div>
    )
}

export default Form;
