import {SocialListItem} from './socialListItem/SocialListItem.tsx';
import './SocialList.scss'

const socialList = [
    {id: 'linkedin', iconSpriteId: 'linkedin', name: 'LINKEDIN'},
    {id: 'gmail', iconSpriteId: 'gmail', name: 'GMAIL'},
    {id: 'github', iconSpriteId: 'git', name: 'GITHUB'}
]

export const SocialList = () => {
    return (
        <ul className={'socialList'}>
            {socialList.map(item =>
                <SocialListItem key={item.id}
                                iconSpriteId={item.iconSpriteId}
                                iconName={item.name} />
            )}
        </ul>
    );
};

