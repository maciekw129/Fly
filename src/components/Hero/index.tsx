import styled from 'styled-components/macro';
import heroImage  from '../../images/heroImage.jpg';

const Hero = styled.div`
    z-index: -99;
    width: 100%;
    height: 13rem;
    background-image: url(${heroImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default Hero;