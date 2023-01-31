import { useState } from "react";
import { IUser } from "./shared/interfaces/iUser";

import { Banner } from "./components/Banner";
import Form from "./components/Form";
import SectionTitle from "./components/SectionTitle";
import Crew from "./components/Crew";
import Footer from "./components/Footer";

function App() {

  const crews = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ];

  const [users, setUsers] = useState<IUser[]>([]);

  const crewNames = crews.map(crew => crew.name);

  const forNewAddedUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Banner 
        src="/img/banner.png"
        alt="Banner principal da página"
      />
      <Form 
        crews={crewNames} 
        users={users}
        forRegisteredUser={user => forNewAddedUser(user)}
      />
      {users.length > 0 && <SectionTitle title="Minhas Organizações: " />}
      {crews.map (crew => (
        <Crew 
          key={crew.name} 
          name={crew.name}
          primaryColor={crew.primaryColor}
          secondaryColor={crew.secondaryColor}
          users={users.filter(user => user.crew === crew.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;