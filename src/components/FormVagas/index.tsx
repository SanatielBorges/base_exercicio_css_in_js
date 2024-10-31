import { FormEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  aoPesquisar: (termo: string) => void;
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 8px;
  }
`;

const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  height: 40px;
  width: 100%;
  box-sizing: border-box;
`;

const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: #b38185;
  }

  @media (max-width: 768px) {
    margin-left: 0;
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
