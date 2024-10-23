import styled from 'styled-components';

const VagaItem = styled.li`
  border: 1px solid #2980b9; /* Azul principal */
  background-color: #ecf0f1; /* Azul secundário */
  color: #2980b9; /* Azul principal */
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: #2980b9; /* Azul principal */
    color: #ecf0f1; /* Azul secundário */
  }
`;

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;

const VagaLink = styled.a`
  border-color: #ecf0f1; /* Azul secundário */
  background-color: #2980b9; /* Azul principal */
  color: #ecf0f1; /* Azul secundário */
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  /* Alterar estilo ao passar o mouse */
  ${VagaItem}:hover & {
    border-color: #2980b9; /* Azul principal */
    background-color: #ecf0f1; /* Azul secundário */
    color: #2980b9; /* Azul principal */
  }
`;

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">
      Ver detalhes e candidatar-se
    </VagaLink>
  </VagaItem>
);

export default Vaga;
