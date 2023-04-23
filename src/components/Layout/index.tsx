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
              <a href="https://github.com/ArthurAndradee" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}size="xl" style={{color:"var(--black)", margin: "10px", cursor: "pointer"}}></FontAwesomeIcon>  
              </a>
              <a href="https://www.linkedin.com/in/arthur-andrade-da-silva-05a131216/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}size="xl" style={{margin: "10px", cursor: "pointer"}}></FontAwesomeIcon>
              </a>
              <a href="mailto: arthurandrad.23@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope}size="xl" style={{margin: "10px", cursor: "pointer"}}></FontAwesomeIcon>
              </a>
            </Icons>
          <Title>Estudante de ensino médio & Desenvolvedor front-end júnior</Title>
          <Point />
          <Menu />
      </Container>
    </div>
  );
}

export default Layout;