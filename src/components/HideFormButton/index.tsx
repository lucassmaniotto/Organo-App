import "./index.css";

interface HideFormButtonProps {
    onClick: () => void;
}

const HideFormButton = ({ onClick }: HideFormButtonProps) => {
    return (
        <button className="hide-form-button" onClick={onClick}></button>
    );
};

export default HideFormButton;