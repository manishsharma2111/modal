import styled from 'styled-components';

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Button = styled.button`
    margin-top: 0;
    width: 100%;
    height: 3em;

    border-radius: 4px;
    border: none;
    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 0.2em;
`;
