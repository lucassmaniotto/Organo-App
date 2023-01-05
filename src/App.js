import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import SectionTitle from "./components/SectionTitle";
import Crew from "./components/Crew";
import Footer from "./components/Footer";

function App() {

  // Variables
  const crewList =[{
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
  }];

  const initialUsers = [
    {
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[0].name,
    },
    {
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[0].name,
    },
    {
      name: 'PAULO SILVEIRA',
      charge: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      crew: crewList[0].name,
    },
    {
      name: 'GUILHERME LIMA',
      charge: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      crew: crewList[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      charge: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    },
    {
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[1].name
    },
    {
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[2].name
    },
    {
      name: 'GUILHERME LIMA',
      charge: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      crew: crewList[2].name
    },
    {
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[3].name
    },
    {
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[4].name
    },
    {
      name: 'GUILHERME LIMA',
      charge: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      crew: crewList[4].name
    },
    {
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[5].name
    },
    {
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[5].name
    },
  ];

  //const local = JSON.parse(localStorage.getItem('users')) || initialUsers;

  // States
  const [crews, setCrews] = useState (crewList);
  //const [users, setUsers] = useState([...local]);
  const [users, setUsers] = useState([...initialUsers]);

  // Functions
  const forNewAddedUser = (user) => {
    setUsers([...users, user]);
    localStorage.setItem('users', JSON.stringify([...users, user]));
  };

  const forDeleteUser = () => {
    console.log('deletar');
  };

  const forHideForm = () => {
    const form = document.querySelector('.section__form-content');
    if (form.classList.contains('hide')) {
        form.classList.remove('hide');
    } else {
        form.classList.add('hide');
    }
}

  const forChangeCrewColor = (color, name) => {
    setCrews(crews.map((crew) => {
      if (crew.name === name) {
        crew.primaryColor = color;
      }
      return crew;
    }));
  };

  const crewNames = crews.map(crew => crew.name);

  // Render
  return (
    <div className="App">
      <Banner />
      <Form 
        crews={crewNames} 
        users={users}
        forRegisteredUser={user => forNewAddedUser(user)}
        forHideForm={forHideForm}
      />
      {users.length > 0 && <SectionTitle title="Minhas Organizações: " />}
      {crews.map ((crew) => (
        <Crew 
          key={crew.name}
          crew={crew}
          users={users.filter(user => user.crew === crew.name)}
          changeColor={forChangeCrewColor}
          onDeleteUser={forDeleteUser}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;