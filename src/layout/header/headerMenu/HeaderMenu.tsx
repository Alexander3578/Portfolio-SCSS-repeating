import './HeaderMenu.scss'
import {CustomLink} from '../../../components/link/CustomLink.tsx';

const headerItemsList = [
    {title: 'Projects', id: 'projects'},
    {title: 'Contact', id: 'contacts'}
]

export const HeaderMenu = () => {
    return (
        <nav>
            <ul className="navList">
                {headerItemsList.map(item => {
                    return (
                        <li key={item.id}
                            className={"listItem"}>
                            <CustomLink to={item.id}
                                        smooth spy
                                        activeClass={'active'}
                                        title={item.title}
                                        customSize={'md'}
                                        className={'headerLink'}/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

