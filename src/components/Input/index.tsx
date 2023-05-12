import React from 'react';

import './index.css';

interface InputProps {
    onChange: (value: string) => void;
    className: string;
    placeholder?: string;
    label: string;
    value: string;
    required?: boolean;
    type?: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'tel' | 'url' | 'search' | 'color';
}

const Input = (props: InputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    }

    return(
        <div className="input__content">
            <label className="input__label">{props.label}</label>
            <input value={props.value} onChange={handleChange} className={props.className} placeholder={props.placeholder} required={props.required} type={props.type}/>
        </div>
    )
}

export default Input;