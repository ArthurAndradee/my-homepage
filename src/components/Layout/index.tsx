import React from 'react';

import Menu from '../Menu';

import Point from '../Dot';

import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { 
  Container, 
  Header,
  Title,
  Icons,
} from './styles';

const Layout: React.FC = () => {
  return (
    <div>
      <Button />
      <Container>
          <Header>Arthur Andrade</Header>
          <Icons>
            <FontAwesomeIcon icon={faGithub}size="xl" style={{margin: "10px", cursor: "pointer"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin}size="xl" style={{margin: "10px", cursor: "pointer"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEnvelope}size="xl" style={{margin: "10px", cursor: "pointer"}}></FontAwesomeIcon>
          </Icons>
          <Title>Estudante de ensino médio & Desenvolvedor front-end júnior</Title>
          <Point />
          <Menu />
      </Container>
    </div>
  );
}

export default Layout;