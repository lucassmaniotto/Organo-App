import './index.css'

interface SectionTitleProps {
    title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className="section">
            <h2 className="section__title">{props.title}</h2>
            <div className="section__title--border"></div>
        </div>
    );
}

export default SectionTitle