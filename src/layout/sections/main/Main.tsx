import {CustomLink} from '../../../components/link/CustomLink.tsx';
import lightPhoto from '../../../assets/images/support 1 (convert.io).webp'
import './Main.scss'
import {Icon} from '../../../components/icon/Icon.tsx';

export const Main = () => {
    return (
        <section className={'mainSection'}>
            <div className={'mainContainer'}>
                <div className={'mainContent'}>
                    <h1 className={'mainSmall'}>DEVELOPER</h1>
                    <h2 className={'mainAuthor'}>Alex Stasyuk</h2>
                    <p className={'mainText'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                    <CustomLink className={'mainLink'}
                                to={'contacts'}
                                smooth
                                title={'Contact Me'}
                                variant={'primary'}
                                customSize={'md'}/>
                </div>
                <img src={lightPhoto} alt={'avatar'} className={'photoMain'}/>
                <Icon className={'mainArrow'} iconId={'arrowBottom'} width={'18'} height={'28'} viewBox={'0 0 18 28'}/>
            </div>
        </section>
    );
};

