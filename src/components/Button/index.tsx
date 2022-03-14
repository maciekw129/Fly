import styled from 'styled-components/macro';

const Button = styled.button`
    background-color: ${props => props.theme.colors.primaryColor};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    color: #ffffff;
    margin: 1.5rem;
    cursor: pointer;
`;

export default Button;