import React from 'react';

const Inputs = (props) => {
    return (
        <>
            <input type="text" name="num1" value={props.num1} onChange={e => props.onNumUmChanged(e)} />
            <input type="text" name="num2" value={props.num2} onChange={e => props.onNumDoisChanged(e)} /><br />
        </>
    )
}

export default Inputs;
