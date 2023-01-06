import './index.css';
import Card from "../Card";
import hexToRgba from 'hex-to-rgba';

const Crew = ({crew, users, onDeleteUser, changeColor, onFavorite}) => {

    const backgroundColor = { backgroundColor: hexToRgba(crew.color, 0.2) };
    const borderBottomColor = { borderBottomColor: crew.color };

    return (
        (users.length > 0) ? <section className="crew__section" style={backgroundColor}>
            <input type='color' className='crew__input' value={crew.color} onChange={event => changeColor(event.target.value, crew.id)}/>
            <h3 className="crew__title" style={borderBottomColor}>{crew.name}</h3>
            <div className="crew__cards">
                {users.map(user => {
                    return <Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        charge={user.charge} 
                        image={user.image} 
                        color={crew.color}
                        isFavorite={user.favorite}
                        onDelete={onDeleteUser}
                        onFavorite={onFavorite}
                    />
                })}
            </div>
        </section>
        : ''
    );
}

export default Crew;