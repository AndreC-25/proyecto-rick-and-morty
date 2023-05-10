import styled from 'styled-components';
import { useState } from 'react';

const DivSearch = styled.div`
   display: flex;
   /* justify-content: right; */
   margin: 16px;
`;

const Input = styled.input`
   font-size: 22px;
   margin-right: 0.5em;
   width: 10em;
   border-radius: 4px;
`;

const Button = styled.button`
   background-color: #14b314;
   color: black;
   font-size: 18px;
   font-weight: 1000;
   font-family: bold;
   border-radius: 5px;
`;

export default function SearchBar({onSearch}) {
   const[id, setId]  = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <DivSearch>
         <Input type='search' onChange={handleChange} value={id} />
         <Button onClick={() => onSearch(id)}>Agregar</Button>
      </DivSearch>
   );
}