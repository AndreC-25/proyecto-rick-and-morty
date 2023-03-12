import Card from "../Card/Card";
import styled from 'styled-components';

export default function Cards({characters}) {
   // tambien lo podemos destructurar aquí:
   // const { characters } = props;
   const onClose=() => window.alert('Emulamos que se cierra la card');

   const CardsContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
   `;

   return (
      <CardsContainer   >
         {characters.map(({name, species, gender, image}) => {
               return (
                  <Card 
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
