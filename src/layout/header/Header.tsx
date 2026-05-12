import './Header.scss'
import {Logo} from './logo/Logo.tsx';
import {HeaderMenu} from './headerMenu/HeaderMenu.tsx';

export const Header = () => {

    return (
        <header className={'styledHeader'}>
            <div className="container">
                <Logo />
                <HeaderMenu />
            </div>
        </header>
    );
};
