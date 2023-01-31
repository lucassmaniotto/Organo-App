import { IUser } from "../../shared/interfaces/iUser";
import Card from "../Card";

import './index.css';

interface CrewProps {
    primaryColor: string;
    secondaryColor: string;
    name: string;
    users: IUser[];
}

const Crew = (props: CrewProps) => {

    const cssPrimaryColor = { backgroundColor: props.secondaryColor };
    const cssSecondaryColor = { borderBottomColor: props.primaryColor };

    return (
        (props.users.length > 0) ? <section className="crew__section" style={cssPrimaryColor}>
            <h3 className="crew__title" style={cssSecondaryColor}>{props.name}</h3>
            <div className="crew__cards">
                {props.users.map(user => {
                    return (
                        <Card 
                            key={user.name} 
                            name={user.name} 
                            charge={user.charge} 
                            image={user.image} 
                            color={props.primaryColor}
                        />
                    )
                })}
            </div>
        </section>
        : <></>
    );
}

export default Crew;