import React from 'react';

import { useState } from 'react';

import { Buttons, ButtonsBox, MainButton } from "./styles";

const Button: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    function changeTheme() {
        setIsClicked(current => !current);

        if (isClicked) {
            document.documentElement.style.setProperty('--black', '#000000');
            document.documentElement.style.backgroundColor = "#FFFFFF"
        } else {
            document.documentElement.style.setProperty('--black', '#FFFFFF');
            document.documentElement.style.backgroundColor = "#313131"
        }
    }
   
    return (
    <ButtonsBox>
        <Buttons>
            <MainButton onClick={changeTheme}></MainButton>
            {isClicked ? "‎ Tema claro" : "‎ Tema escuro"}
        </Buttons>
    </ButtonsBox>
  );
}

export default Button;