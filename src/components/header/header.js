import { Logo } from './components';
import styled from 'styled-components';

const HeaderContainer = ({className}) => (
    <header className={className}>
        <Logo />
    </header>
);

export const Header = styled(HeaderContainer)`
    height: 120px;
`;

