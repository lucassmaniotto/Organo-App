import './index.css'

const SectionTitle = (props) => {
    return (
        (props.users.length > 0) ? <div className="section">
            <h2 className="section__title">{props.title}</h2>
            <div className="section__title--border"></div>
        </div> : ''
    );
}

export default SectionTitle