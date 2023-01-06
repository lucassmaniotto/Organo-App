import "./index.css";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import HideFormButton from "../HideFormButton";
import { useState } from "react";
import { v4 as id } from "uuid";

const Form = ({forRegisteredUser, forHideForm, forRegisteredNewCrew, crews, users}) => {

    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [image, setImage] = useState('');
    const [crew, setCrew] = useState('');
    const [crewName, setNewCrew] = useState('');
    const [color, setColor] = useState('#6278f7');

    const onSave = (event) => {
        event.preventDefault();
        forRegisteredUser({
            id: id(),
            name, 
            charge, 
            image, 
            crew 
        });
        setName('');
        setCharge('');
        setImage('');
        setCrew('');
    };

    const onRegisterNewCrew = (event) => {
        event.preventDefault();
        forRegisteredNewCrew({name: crewName, color: color});
        setNewCrew('');
        setColor('#6278f7');
    }

    return (
        <section className="section__form">
            <div className="section__form-div">
                <form className="section__form-wrapper " onSubmit={onSave}>
                    <h2 className="section__form-title">Preencha os dados para criar o card do colaborador.</h2>
                    <Input
                        className="input__data"
                        label="Nome"
                        required={true}
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={value => setName(value)}
                    />
                    <Input
                        className="input__data"
                        label="Cargo" 
                        required={true} 
                        placeholder="Digite seu cargo" 
                        value={charge}
                        onChange={value => setCharge(value)}
                    />
                    <Input 
                        className="input__data"
                        label="Imagem" 
                        placeholder="https://..." 
                        value={image}
                        onChange={value => setImage(value)}
                    />
                    <Select 
                        label="Time" 
                        itens={crews} 
                        required={true} 
                        value={crew}
                        onChange={value => setCrew(value)}
                    />
                    <Button>Criar card</Button>
                </form>
                <form className="section__form-wrapper " onSubmit={onRegisterNewCrew}>
                    <h2 className="section__form-title">Ou crie um novo Time.</h2>
                    <div className="section__form-content">
                        <div className="section__form-colors">
                            <Input
                                className="input__data input__data--color"
                                label="Nome do time"
                                required={true}
                                placeholder="Digite o nome do time"
                                value={crewName}
                                onChange={value => setNewCrew(value)}
                            />
                            <Input
                                className="input__color"
                                label="Cor" 
                                required={true} 
                                type="color"
                                value={color}
                                onChange={value => setColor(value)}
                            />
                        </div>
                        <Button>Criar time</Button>
                    </div>
                </form>
            </div>
            {users.length > 0 && <HideFormButton onButtonPressed={forHideForm} />}
        </section>
    )
}

export default Form;