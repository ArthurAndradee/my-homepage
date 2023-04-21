import React from 'react';

import Menu from '../Menu';

import Point from '../Dot';

import Button from '../Button';

import { 
  Container, 
  Header,
  Title,
} from './styles';

const Layout: React.FC = () => {
  return (
    <div>
      <Button />
      <Container>
          <Header>Arthur Andrade</Header>
          <Title>Estudante de ensino médio & Desenvolvedor front-end júnior</Title>
          <Point />
          <Menu />
      </Container>
    </div>
  );
}

export default Layout;