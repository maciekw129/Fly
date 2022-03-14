import styled from 'styled-components/macro';

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.colors.secondaryColor};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 99;
`;