import styled from "styled-components";

export const Section = styled.div`
    color: var(--black);
    display: flex;
    align-items: center;

    margin: 5px 15px;
    height: 65px;
    width: 293px;

    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;

    transition: all 500ms;

    cursor: pointer;
    
    :hover {
        font-size:44px;
        font-size-adjust: 20px;
    }
`;

export const Options = styled.div`
    float: left;
`;

export const MainText = styled.div`
    float: right;
`;