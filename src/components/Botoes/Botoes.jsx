import React from 'react';

const Botoes = (props) => {
    return (
        <div>
            <div className='botoes'>
                <button type="submit" onClick={props.soma}>Soma</button>
                <button type="submit" onClick={props.subtracao}>Subtração</button>
                <button type="submit" onClick={props.multiplicacao}>Multiplicação</button>
                <button type="submit" onClick={props.divisao}>Divisão</button>
            </div>
        </div>
    )
}

export default Botoes;
