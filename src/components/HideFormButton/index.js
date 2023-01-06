import "./index.css";

const HideFormButton = ({ onButtonPressed }) => {
    return (
        <button className="hide-form-button" onClick={onButtonPressed}></button>
    );
};

export default HideFormButton;