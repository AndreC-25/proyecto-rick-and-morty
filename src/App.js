import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App () {
  // HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  useEffect(() => {
    !access && navigate('/')
  }, [access]);
  
  // CREDENCIALES FAKE
  const username = 'andrecabrejos.25@gmail.com';
  const password = 'ads12345';
  
  // EVENT HANDLERS
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

    const login = (userData) => {
      if (userData.username === username && userData.password === password) {
        setAccess(true);
        navigate('/home');
      } else {
        alert('credenciales incorrectas');
      }
    }

  // RENDER
  return (
    <div className='App' style={{ padding: '25px' }}>
        {pathname !== '/' && <Nav onSearch={onSearch} />}
        <div>
          <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}
            />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
