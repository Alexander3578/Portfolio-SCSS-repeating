import './HeaderMenu.scss'
import {CustomLink} from '../../../components/link/CustomLink.tsx';

const headerItemsList = [
    {title: 'Projects', id: 'projects'},
    {title: 'Contact', id: 'contact'}
]

export const HeaderMenu = () => {
    return (
        <nav>
            <ul className="navList">
                {headerItemsList.map(item => {
                    return (
                        <li key={item.id}
                            className={"listItem"}>
                            <CustomLink title={item.title}
                                        size={'md'}
                                        className={'headerLink'}/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

