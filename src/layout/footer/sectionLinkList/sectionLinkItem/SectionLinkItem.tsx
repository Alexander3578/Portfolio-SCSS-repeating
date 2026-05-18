import './SectionLinkItem.scss'

type SectionLinkItem = {
    itemName: string
}

export const SectionLinkItem = ({itemName}:SectionLinkItem) => {
    return (
        <li className={'sectionLinkItem'}>
            {itemName}
        </li>
    );
};

