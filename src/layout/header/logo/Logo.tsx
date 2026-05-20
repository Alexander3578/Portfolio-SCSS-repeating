import './Logo.scss';
import {animateScroll as scroll} from 'react-scroll';

export const Logo = () => {
    return (
        <a className="logo"
           onClick={() => {scroll.scrollToTop()}}>
            Home
        </a>
    );
};

