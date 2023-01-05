import './index.css';
import Card from "../Card";
import hexToRgba from 'hex-to-rgba';

const Crew = ({crew, users, onDeleteUser, changeColor}) => {

    const backgroundColor = { backgroundColor: hexToRgba(crew.color, 0.2) };
    const borderBottomColor = { borderBottomColor: crew.color };

    return (
        (users.length > 0) ? <section className="crew__section" style={backgroundColor}>
            <input type='color' className='crew__input' value={crew.color} onChange={event => changeColor(event.target.value, crew.name)}/>
            <h3 className="crew__title" style={borderBottomColor}>{crew.name}</h3>
            <div className="crew__cards">
                {users.map(user => {
                    return <Card key={user.name} name={user.name} charge={user.charge} image={user.image} color={crew.color} onDelete={onDeleteUser}/>
                })}
            </div>
        </section>
        : ''
    );
}

export default Crew;