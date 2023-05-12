import "./index.css";

const HideFormButton = ({ onButtonPressed }: { onButtonPressed: () => void }) => {
    return (
        <button className="hide-form-button" onClick={onButtonPressed}></button>
    );
};

export default HideFormButton;
