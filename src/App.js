import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';

// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id)
      })
    )
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}
        />
    </div>
  )
}

export default App
