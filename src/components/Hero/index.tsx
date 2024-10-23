import styled from 'styled-components';

const HeroContainer = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2980b9; /* Azul principal */
    content: '';
    opacity: 0.7;
  }
`;

const HeroTitle = styled.h2`
  position: relative;
  color: #eee;
  font-family: Gloock, serif;
  font-size: 48px;
`;

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </HeroContainer>
);

export default Hero;
