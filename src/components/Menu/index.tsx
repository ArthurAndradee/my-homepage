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
      ‎ E aí? Me chamo Arthur Andrade, tenho 17 anos e um sonho de 
      trabalhar na área de desenvolvimento front-end. <br />
      ‎ Atualmente estou no ensino médio. Comecei meus estudos em 
      novembro de 2022 e sigo com eles até hoje. Durante esse período, aprendi
      HTML, CSS, Javascript e estou seguindo minha jornada com <br /> o React
      no ramo de construção de aplicações e websites. <br />
      ‎ Hoje em Porto Alegre, estou em busca de vagas que aproximem-se
      do caminho do desenvolvimento web, e pretendo seguir esse caminho de
      eterno aprendizado durante muitos anos por vir.
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
      Clique para ver!
    </section>
  )

  return (
      <div>
        <Options>
          <Section
            onMouseEnter={() => setShowProject(true)} 
            onMouseLeave={() => setShowProject(false)}>
              Projetos
          </Section>
          <Section
            onMouseEnter={() => setShowInfo(true)} 
            onMouseLeave={() => setShowInfo(false)}>
              Info
          </Section>
          <Section
            onMouseEnter={() => setShowContact(true)} 
            onMouseLeave={() => setShowContact(false)}>
              <a style={{
                color:"var(--black)", 
                textDecoration: "none",
                }}
                href="https://www.canva.com/design/DAFT_Ap8cus/2bAMES5ofM5ceY0rOtdGGA/view?utm_content=DAFT_Ap8cus&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" 
                target="_blank" 
                rel="noreferrer">
                  Currículo
              </a>
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