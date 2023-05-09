import Card from "../Card/Card";
import styled from 'styled-components';

export default function Cards({characters, onClose}) {
   // tambien lo podemos destructurar aquí:
   // const { characters } = props;

   const CardsContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-flow: wrap;
   `;

   return (
      <CardsContainer>
         {characters.map(({id, name, species, gender, image}) => {
               return (
                  <Card
                     id={id}
                     name = {name}
                     species = {species}
                     gender = {gender}
                     image = {image}
                     onClose = {onClose}
                  />
               ); 
         })}
      </CardsContainer>
   );
}
