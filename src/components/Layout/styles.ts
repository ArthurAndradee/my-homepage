import styled from "styled-components";

export const Container = styled.div`
    position:absolute;

    top:30px;
    right:30px;
    bottom:30px;
    left:60px;

    border: 1px solid;
    border-color: var(--black);

    transition: all 500ms;
`;

export const Header = styled.div`
    color: var(--black);
    font-size: 55px;

    margin: 15px;
    font-family: 'Open Sans', sans-serif;

    transition: all 500ms;

    :hover {
        font-size:67px;
    }

    width: 480px;
`;

export const Title = styled.div`
    color: var(--black);
    margin: 15px;

    font-size: 15px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;

    transition: all 500ms;

    :hover {
        font-size:17px;
    }

    width: 480px;
`;

export const Icons = styled.div`
    float: right;
    margin-right: 50px;
`;