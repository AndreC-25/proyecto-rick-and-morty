import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';

export default function Nav({onSearch}) {

  return (
    <div className={style.divBar}>
        <div className={style.divContent}>
          <button className={style.button}>
            <NavLink className={style.navLink} to='/home'>Home</NavLink>
          </button>
          <button className={style.button}>
            <NavLink className={style.navLink} to='/about'>About</NavLink>
          </button>
        </div>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}