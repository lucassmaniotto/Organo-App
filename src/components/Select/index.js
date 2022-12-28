import './index.css';

const Select = (props) => {
    return (
        <div className="select__content">
            <label className="select__label">{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} className="select__select" required={props.required} value={props.value}>
                <option value="" disabled hidden>Selecione</option>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;