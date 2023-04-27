import React from 'react';

import { useState } from 'react';

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
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [hovered1, setHovered1] = useState(false);
  const toggleHover1 = () => setHovered1(!hovered1);

  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);

  return (
    <div>
      <Button />
      <Container>
          <Header>Arthur Andrade</Header>
            <Icons>
              <a href="https://github.com/ArthurAndradee" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} 
                size={hovered ? '2xl' : 'xl'}
                onMouseEnter={toggleHover} onMouseLeave={toggleHover}
                style={{color:"var(--black)", margin: "10px", cursor: "pointer", transition:"all 500ms",}}></FontAwesomeIcon>  
              </a>
              <a href="https://www.linkedin.com/in/arthur-andrade-da-silva-05a131216/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}
                size={hovered1 ? '2xl' : 'xl'}
                onMouseEnter={toggleHover1} onMouseLeave={toggleHover1}
                style={{color:"var(--black)", margin: "10px", cursor: "pointer", transition:"all 500ms",}}></FontAwesomeIcon>
              </a>
              <a href="mailto: arthurandrad.23@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope}
                size={hovered2 ? '2xl' : 'xl'}
                onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}
                style={{color:"var(--black)", margin: "10px", cursor: "pointer", transition:"all 500ms",}}></FontAwesomeIcon>
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