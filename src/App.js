import { v4 as id } from 'uuid';
import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import SectionTitle from "./components/SectionTitle";
import Crew from "./components/Crew";
import Footer from "./components/Footer";
import Swal from 'sweetalert2';

function App() {

  // Variables
  const crewList =[{
    id: id(),
    name: 'Programação',
    color: '#57C278'
  },
  {
    id: id(),
    name: 'Front-End',
    color: '#82CFFA'
  },
  {
    id: id(),
    name: 'Data Science',
    color: '#A6D157'
  },
  {
    id: id(),
    name: 'DevOps',
    color: '#E06B69'
  },
  {
    id: id(),
    name: 'UX e Design',
    color: '#DB6EBF'
  },
  {
    id: id(),
    name: 'Mobile',
    color: '#FFBA05'
  },
  {
    id: id(),
    name: 'Inovação e Gestão',
    color: '#FF8A29'
  }];

  const initialUsers = [
    {
      id: id(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[0].name,
      color: crewList[0].color
    },
    {
      id: id(),
      favorite: false,
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[0].name,
    },
    {
      id: id(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      charge: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      crew: crewList[0].name,
    },
    {
      id: id(),
      favorite: false,
      name: 'GUILHERME LIMA',
      charge: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      crew: crewList[1].name
    },
    {
      id: id(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[1].name
    },
    {
      id: id(),
      favorite: false,
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[2].name
    },
    {
      id: id(),
      favorite: false,
      name: 'GUILHERME LIMA',
      charge: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      crew: crewList[2].name
    },
    {
      id: id(),
      favorite: false,
      name: 'DANIEL ARTINE',
      charge: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      crew: crewList[3].name
    },
    {
      id: id(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[4].name
    },
    {
      id: id(),
      favorite: false,
      name: 'GUILHERME LIMA',
      charge: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      crew: crewList[4].name
    },
    {
      id: id(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      charge: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      crew: crewList[5].name
    },
    {
      id: id(),
      favorite: false,
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

  const forRegisterCrew = (newCrew) => {
    setCrews([...crews, { ...newCrew, id: id() }]);
    localStorage.setItem('crewList', JSON.stringify([...crews, { id: id(), ...newCrew }]));
  };

  const forDeleteUser = (id) => {
    if (!users.find((user) => user.id === id).favorite) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
      localStorage.setItem('users', JSON.stringify(newUsers));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Atenção!',
        text: 'Não é possível excluir um usuário favoritado!',
      });
    }
  };

  const forHideForm = () => {
    const form = document.querySelectorAll('.section__form-wrapper');
    form.forEach((item) => item.classList.contains('hide') ? item.classList.remove('hide') : item.classList.add('hide'));
  };

  const forChangeCrewColor = (color, id) => {
    setCrews(crews.map((crew) => {
      if (crew.id === id) {
        crew.color = color;
      }
    localStorage.setItem('crewList', JSON.stringify([...crews]));
    return crew;
    }));
  };

  const forChangeFavorite = (id) => {
    setUsers(users.map((user) => {
      if (user.id === id) {
        user.favorite = !user.favorite;
      }
      localStorage.setItem('users', JSON.stringify([...users]));
      return user;
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
        forRegisteredNewCrew={forRegisterCrew}
      />
      <section className="section__crews">
        {users.length > 0 && <SectionTitle title="Minhas Organizações: " />}
        {crews.map ((crew) => (
          <Crew 
            key={crew.id}
            crew={crew}
            users={users.filter(user => user.crew === crew.name)}
            changeColor={forChangeCrewColor}
            onDeleteUser={forDeleteUser}
            onFavorite={forChangeFavorite}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;