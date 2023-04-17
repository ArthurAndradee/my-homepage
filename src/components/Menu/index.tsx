import React from 'react';

import { Section, Options, MainText, } from "./styles"

const Menu: React.FC = () => {
  const [showProject, setShowProject] = React.useState(false)
  const [showInfo, setShowInfo] = React.useState(false)
  const [showContact, setShowContact] = React.useState(false)

  const Projects = () => (
    <section 
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
    onMouseEnter={() => setShowProject(true)} 
    onMouseLeave={() => setShowProject(false)}
    >
      ‎ Aqui  você  verá  alguns  dos  projetos  os  quais  tenho  
      trabalhado  nos  últimos  meses,  para  mais  detalhes  clique  no  
      ícone  do  Github.
                                                <br/><br/>
      • Lista de Tarefas em typescript          <br/><br/>
      • Aplicativo de conversão de temperatura  <br/><br/>
      • Clone do twitter                        <br/><br/>
      • Jogo de pedra, papel e tesoura          <br/><br/>
    </section>
  )

  const Info = () => (
    <section 
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
    onMouseEnter={() => setShowInfo(true)} 
    onMouseLeave={() => setShowInfo(false)}
    >
      AAAAAA
    </section>
  )

  const Contact = () => (
    <section 
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
    onMouseEnter={() => setShowContact(true)} 
    onMouseLeave={() => setShowContact(false)}
    >
      STAYING ALIVE
    </section>
  )

  return (
      <div>
        <Options>
          <Section
            onMouseEnter={() => setShowProject(true)} 
            onMouseLeave={() => setShowProject(false)}>
              Projects
          </Section>
          <Section
            onMouseEnter={() => setShowInfo(true)} 
            onMouseLeave={() => setShowInfo(false)}>
              Info
          </Section>
          <Section
            onMouseEnter={() => setShowContact(true)} 
            onMouseLeave={() => setShowContact(false)}>
              Contact
          </Section>
        </Options>
        <MainText>
          { showProject ? <Projects /> : null }
          { showInfo ? <Info /> : null }
          { showContact ? <Contact /> : null }
        </MainText>
    </div>
    )

}

export default Menu;