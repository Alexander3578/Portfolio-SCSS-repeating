import './SectionLinkList.scss'
import {CustomLink} from '../../../components/link/CustomLink.tsx';

const sectionLinkItems = [
    {id: 'projects', name: 'Projects'},
    {id: 'contacts', name: 'Contact'},
]
export const SectionLinkList = () => {
    return (
        <ul className={'sectionLinkList'}>
            {sectionLinkItems.map(item =>
                <li key={item.id}
                    className={'sectionLinkItem'}>
                    <CustomLink to={item.id}
                                smooth
                                title={item.name}/>
                </li>
            )}
        </ul>
    )
};

