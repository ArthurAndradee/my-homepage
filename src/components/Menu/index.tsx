import React from 'react';

import { Section } from "./styles"

const Menu: React.FC = () => {
  const [showText, setShowText] = React.useState(false)

  const Projects = () => (
    <div 
    id="Text" 
    className="search-Text"
    style={{
      color: "red",
      border: "2px solid black",
    }}
    >
      Some Text
    </div>
  )

  return (
    <div>
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
      <div>
      { showText ? <Projects /> : null }
      </div>
    </div>
    )

}

export default Menu;