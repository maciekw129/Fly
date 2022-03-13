import {
    HeaderContainer,
    PlaneIcon,
} from './styles';

const Header = () => {
    return(
        <HeaderContainer>
            <div>
                <PlaneIcon />
                <h1>Fly!</h1>
            </div>
        </HeaderContainer>
    )
};

export default Header;