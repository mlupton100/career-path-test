import React from "react";
import { string, number, func, oneOfType, InferProps } from 'prop-types';

function RadioInput({ id, value, onSelect }: InferProps<typeof RadioInput.propTypes>) {
    return (
        <>
            <input type="radio" id={id} name={`${value}`} value={value} onChange={onSelect} checked={false}/>
            <label className='sr-only' htmlFor={id}>{value}</label>
        </>
    )
}

RadioInput.propTypes = {
    id: string.isRequired,
    value: oneOfType([string, number]).isRequired,
    onSelect: func.isRequired,
}

export default RadioInput;
