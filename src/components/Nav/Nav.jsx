import SearchBar from '../SearchBar/SearchBar'
import styled from 'styled-components'

export default function Nav({onSearch}) {
  const BarraNavegacion = styled.div`
    background-color: rgb(15, 131, 131);
    border: 1px solid rgb(22, 155, 155);
    margin-bottom: 40px;
  `; 

  return (
    <BarraNavegacion>
        <SearchBar onSearch={onSearch}/>
    </BarraNavegacion>
  )
}