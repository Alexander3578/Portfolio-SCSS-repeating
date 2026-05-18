import {SocialList} from './socialList/SocialList.tsx';
import './Footer.scss'
import {SectionLinkList} from './sectionLinkList/SectionLinkList.tsx';
export const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footerContainer'}>
                <SocialList/>
                <SectionLinkList />
                <small className={'footerSmall'}>WEB DEVELOPER 2021</small>
            </div>
        </footer>
    );
};

