import styled from 'styled-components';
import { PlaneAlt } from '@styled-icons/boxicons-solid/PlaneAlt';

export const HeaderContainer = styled.header`
    display: flex;
    height: 4rem;
    align-items: center;
    padding: 0 2rem;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const PlaneIcon = styled(PlaneAlt)`
    height: 3rem;
    margin-right: 1rem;
    color: ${props => props.theme.colors.primaryColor};
`;