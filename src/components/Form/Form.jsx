import style from './Form.module.css';
import { useState } from 'react';
import validation from './validation'

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    validation({ ...userData, [name]: value }, errors, setErrors)
  };

  const submitHandler= (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={submitHandler} className={style.container}>
      <div className={style.divInput}>
        <label htmlFor="email">Username: </label>
        <input 
          className={style.input}
          type="text" 
          name="username" 
          value={userData.username}
          onChange={handleInputChange}          
        />
        {errors.username !== '' ? <p className={style.mensajeError}>{errors.username}</p> : ''}
      </div>
      
      <div className={style.divInput}>
        <label htmlFor="password">Password: </label>
        <input 
          className={style.input}
          type="text" 
          name="password"
          value={userData.password}
          onChange={handleInputChange}                  
        />
        {errors.password !== '' ? <p className={style.mensajeError}>{errors.password}</p> : ''}
      </div>
      <button 
        className={style.boton} 
        type="submit"
      >
        LOGIN
      </button>
    </form>
  )
};

export default Form;