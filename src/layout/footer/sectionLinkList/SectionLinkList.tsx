import './SectionLinkList.scss'
import {SectionLinkItem} from './sectionLinkItem/SectionLinkItem.tsx';

const sectionLinkItems = [
    {id: 'projects', name: 'Projects'},
    {id: 'contact', name: 'Contact'},
]
export const SectionLinkList = () => {
    return (
        <ul className={'sectionLinkList'}>
            {sectionLinkItems.map(item =>
                <SectionLinkItem key={item.id}
                                 itemName={item.name}/>)}
        </ul>
    );
};

