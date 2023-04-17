import React from 'react';

import Menu from '../Menu';

import Point from '../Dot';

import { 
  Container, 
  Header,
  Title,
} from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
        <Header>Arthur Andrade</Header>
        <Title>Estudante de ensino médio & Desenvolvedor front-end júnior</Title>
        <Point />
        <Menu />
    </Container>
  );
}

export default Layout;