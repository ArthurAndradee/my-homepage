import React from 'react';

import { Section, Options, MainText, } from "./styles"

const Menu: React.FC = () => {
  const [showText, setShowText] = React.useState(false)

  const Projects = () => (
    <div 
    id="Text" 
    className="search-Text"
    style={{
      width: "700px", 

      marginRight: "200px",
      marginTop: "25px",

      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 'bold',
      fontSize: "18px",

      textAlign: "left",
      letterSpacing: "2px",

      color: "var(--black)",
      
    }}
    onMouseEnter={() => setShowText(true)} 
    onMouseLeave={() => setShowText(false)}
    >
      ‎ Aqui  você  verá  alguns  dos  projetos  os  quais  tenho  
      trabalhado  nos  últimos  meses,  para  mais  detalhes  clique  no  
      ícone  do  Github.
      <br></br><br></br>
      • Lista de Tarefas em typescript<br></br><br></br>
      • Aplicativo de conversão de temperatura<br></br><br></br>
      • Clone do twitter<br></br><br></br>
      • Jogo de pedra, papel e tesoura<br></br><br></br>
    </div>
  )

  return (
      <div>
        <Options>
          <Section
            onMouseEnter={() => setShowText(true)} 
            onMouseLeave={() => setShowText(false)}>
              Projects
          </Section>
          <Section
            onMouseEnter={() => setShowText(true)} 
            onMouseLeave={() => setShowText(false)}>
              Info
          </Section>
          <Section
            onMouseEnter={() => setShowText(true)} 
            onMouseLeave={() => setShowText(false)}>
              Contact
          </Section>
        </Options>
        <MainText>
          { showText ? <Projects /> : null }
        </MainText>
    </div>
    )

}

export default Menu;