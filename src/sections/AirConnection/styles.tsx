import styled from 'styled-components/macro';

export const SearchConnection = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 3rem;

        @media only screen and (max-width: 550px) {
            flex-direction: column;
            margin: 1rem;
        }
`;

export const TrackList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    flex-wrap: wrap;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 550px) {
            padding: 0 2rem;
        }
`;