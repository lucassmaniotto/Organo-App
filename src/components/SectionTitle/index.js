import './index.css'

const SectionTitle = (props) => {
    return (
        <div className="section">
            <h2 className="section__title">{props.title}</h2>
            <div className="section__title--border"></div>
        </div>
    );
}

export default SectionTitle