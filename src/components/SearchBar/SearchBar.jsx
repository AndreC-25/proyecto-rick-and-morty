import styled from 'styled-components';

const DivSearch = styled.div`
   display: flex;
   justify-content: center;
   margin: 16px;
`;

const Input = styled.input`
   font-size: 22px;
   margin-right: 3em;
   width: 10em;
   border-radius: 4px;
`;

const Button = styled.button`
   background-color: green;
   color: white;
   font-size: 16px;
`;

export default function SearchBar({onSearch}) {
   return (
      <DivSearch>
         <Input type='search' />
         <Button onClick={(id) => {onSearch(id)}}>Agregar</Button>
      </DivSearch>
   );
}