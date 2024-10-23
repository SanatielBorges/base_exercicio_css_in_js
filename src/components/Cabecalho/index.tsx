import styled from 'styled-components';

const CabecalhoContainer = styled.header`
  background-color: #2c3e50; /* Azul marinho */
  color: #2980b9; /* Azul mais claro */
  text-align: center;
  padding: 24px 0;
`;

const Cabecalho = () => (
  <CabecalhoContainer>
    <h1>EBAC Jobs</h1>
  </CabecalhoContainer>
);

export default Cabecalho;
