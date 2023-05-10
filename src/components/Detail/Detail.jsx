import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Detail = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
      return setCharacter({});
  }, [id]);

  return (
    <div className={style.contenedorDetail}>
      <div className={style.data}>
        <h1>{character.name && character.name}</h1>
        <h5>STATUS | {character.status && character.status}</h5>
        <h5>GENDER | {character.gender && character.gender}</h5>
        <h5>SPECIE | {character.species && character.species}</h5>
        <h5>ORIGIN | {character.origin?.name && character.origin?.name}</h5>
      </div>
      <div className={style.divImagen}>
        <img className={style.imagen} src={character.image && character.image}></img>
      </div>
    </div>
  )
};

export default Detail;