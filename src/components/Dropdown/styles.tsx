import styled from 'styled-components/macro';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const DropdownContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const DropdownContent = styled.div<{isVisible: boolean}>`
    position: absolute;
    top: 3rem;
    width: 100%;
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 30px;
    max-height: 300px;
    overflow-y: scroll;
    border: 1px solid ${ props => props.theme.colors.secondaryColor };
    border-radius: 5px;
    background-color: #ffffff;
    z-index: 99;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Search = styled.input`
    height: 2.5rem;
    min-width: 115px;
    width: 100%;
    border: 1px solid ${ props => props.theme.colors.secondaryColor };
    border-radius: 5px 0px 0px 5px;
    padding-left: 0.75rem;
`;

export const IconWrapper = styled.div<{isVisible: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 3rem;
    border: 1px solid ${ props => props.theme.colors.secondaryColor };
    border-left: none;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.3s linear;
    transition: transform 0.25s ease-in-out;

    ${StyledIconBase} {
        width: 1.25rem;
        height: 1.25rem;
        transform: rotate(${({isVisible}) => isVisible ? '180deg' : '0deg'});
        transition: transform 0.25s ease-in-out;
    }

    &:hover {
        cursor: pointer;
        background-color: ${ props => props.theme.colors.secondaryColor };
        transition: background-color 0.3s linear;
    }
`

export const Option = styled.a`
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    transition: background-color 0.1s linear;

    &:hover {
        cursor: pointer;
        background-color: ${ props => props.theme.colors.secondaryColor };
        transition: background-color 0.5s linear;
    }
`;
