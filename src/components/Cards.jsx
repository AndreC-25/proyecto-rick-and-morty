import Card from './Card';

export default function Cards({characters}) {
   // tambien lo podemos destructurar aquí:
   // const { characters } = props;
   const onClose=() => window.alert('Emulamos que se cierra la card');
   return (
      <div>
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
      </div>
   );
}
