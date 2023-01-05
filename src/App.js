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
    color: '#57C278'
  },
  {
    name: 'Front-End',
    color: '#82CFFA'
  },
  {
    name: 'Data Science',
    color: '#A6D157'
  },
  {
    name: 'DevOps',
    color: '#E06B69'
  },
  {
    name: 'UX e Design',
    color: '#DB6EBF'
  },
  {
    name: 'Mobile',
    color: '#FFBA05'
  },
  {
    name: 'Inovação e Gestão',
    color: '#FF8A29'
  }];

  const initialUsers = [
    {
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[0].name,
      color: crewList[0].color
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

  const localUsers = JSON.parse(localStorage.getItem('users')) || initialUsers;
  const localCrews = JSON.parse(localStorage.getItem('crewList')) || crewList;

  // States
  const [crews, setCrews] = useState([...localCrews]);
  const [users, setUsers] = useState([...localUsers]);

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
        crew.color = color;
      }
    localStorage.setItem('crewList', JSON.stringify([...crews]));
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