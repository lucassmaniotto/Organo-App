import './index.css';
import Card from "../Card";

const Crew = ({crew, users, onDeleteUser, changeColor}) => {

    const backgroundColor = { backgroundColor: crew.secondaryColor };
    const borderBottomColor = { borderBottomColor: crew.primaryColor };

    return (
        (users.length > 0) ? <section className="crew__section" style={backgroundColor}>
            <input type='color' className='crew__input' value={crew.primaryColor} onChange={event => changeColor(event.target.value, crew.name)}/>
            <h3 className="crew__title" style={borderBottomColor}>{crew.name}</h3>
            <div className="crew__cards">
                {users.map(user => {
                    return <Card key={user.name} name={user.name} charge={user.charge} image={user.image} color={crew.primaryColor} onDelete={onDeleteUser}/>
                })}
            </div>
        </section>
        : ''
    );
}

export default Crew;