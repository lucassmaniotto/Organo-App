import './index.css';

const Input = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    return(
        <div className="input__content">
            <label className="input__label">{props.label}</label>
            <input value={props.value} onChange={handleChange} className="input__data" placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}

export default Input;