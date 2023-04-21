import styled from "styled-components";

export const ButtonsBox = styled.div`
    position: absolute;
    width: 40px;
    margin: 90px 10px;

    writing-mode: vertical-rl;
    text-orientation: sideways;
    letter-spacing: 2px;

    transition: all 500ms;
`;

export const Buttons = styled.div`
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;
    margin-bottom: 5px;

    color: var(--black);
    font-family: 'Open Sans', sans-serif;
    font-weight: bold ;
    font-size: 20px;

    transition: all 500ms;
`;

export const MainButton = styled.div`
    width: 40px;
    height: 40px;
    
    margin-bottom: 5px;
    background-color: var(--white);

    float: left;
    justify-content: center;

    border: 1px solid;
    border-color: var(--black);

    transition: all 500ms;

    cursor: pointer;
    
    :hover {
        background-color: #212121;
    }

    
`;