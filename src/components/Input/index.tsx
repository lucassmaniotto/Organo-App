import React from 'react';

import './index.css';

interface InputProps {
    onChange: (value: string) => void;
    placeholder: string;
    label: string;
    value: string;
    required?: boolean;
}

const Input = ({ onChange, placeholder, label, value, required }: InputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return(
        <div className="input__content">
            <label className="input__label">{label}</label>
            <input 
                value={value} 
                onChange={handleChange} 
                className="input__data" 
                placeholder={placeholder} 
                required={required}
            />
        </div>
    )
}

export default Input;