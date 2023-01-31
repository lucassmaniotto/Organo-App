import './index.css';

interface SelectProps {
    onChange: (value: string) => void;
    label: string;
    required?: boolean;
    value: string;
    itens: string[];
}

const Select = (props: SelectProps) => {
    return (
        <div className="select__content">
            <label className="select__label">{props.label}</label>
            <select onChange={event => 
                props.onChange(event.target.value)} 
                className="select__select" 
                required={props.required} 
                value={props.value}
            >
                <option 
                    value="" 
                    disabled 
                    hidden
                >
                    Selecione
                </option>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;