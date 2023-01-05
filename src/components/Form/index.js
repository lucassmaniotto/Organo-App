import "./index.css";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import HideFormButton from "../HideFormButton";
import { useState } from "react";

const Form = ({forRegisteredUser, forHideForm, crews, users}) => {
    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [image, setImage] = useState('');
    const [crew, setCrew] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        forRegisteredUser({ 
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

    return (
        <section className="section__form">
            <form className="section__form-content " onSubmit={onSave}>
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
            {users.length > 0 && <HideFormButton onClick={forHideForm} />}
        </section>
    )
}

export default Form;