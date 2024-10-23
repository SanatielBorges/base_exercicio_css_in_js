import { FormEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  aoPesquisar: (termo: string) => void;
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #2c3e50; /* Cor azul marinho */
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

const Campo = styled.input`
  padding: 0 16px;
  outline-color: #2980b9; /* Azul mais claro para o foco */
`;

const BotaoPesquisar = styled.button`
  background-color: #2980b9; /* Azul mais claro */
  border: 1px solid #2980b9; /* Azul mais claro */
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: #fff; /* Branco para o texto */
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #3498db; /* Um tom mais claro de azul ao passar o mouse */
  }
`;

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  );
};

export default FormVagas;
