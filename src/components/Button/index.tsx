import styled from 'styled-components/macro';

const Button = styled.button`
    background-color: ${props => props.theme.colors.primaryColor};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    color: #ffffff;
    margin: 0 2rem;
    cursor: pointer;
`;

export default Button;