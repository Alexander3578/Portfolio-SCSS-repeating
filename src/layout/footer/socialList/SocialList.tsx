import {SocialListItem} from './socialListItem/SocialListItem.tsx';
import './SocialList.scss'
import {useContext} from 'react';
import {ThemeContext} from '../../../components/ThemeSwitch.tsx';

const socialList = [
    {id: 'linkedin', iconSpriteId: 'linkedin', darkIconSpriteId: 'darkLinkedin', name: 'LINKEDIN'},
    {id: 'gmail', iconSpriteId: 'gmail', darkIconSpriteId: 'darkGmail', name: 'GMAIL'},
    {id: 'github', iconSpriteId: 'git', darkIconSpriteId: 'darkGit', name: 'GITHUB'}
]

export const SocialList = () => {

    const ctxt = useContext(ThemeContext)

    if (!ctxt)
        return null

    return (
        <ul className={'socialList'}>
            {socialList.map(item =>
                <SocialListItem key={item.id}
                                iconSpriteId={ctxt.theme === 'light' ? item.iconSpriteId : item.darkIconSpriteId}
                                iconName={item.name} />
            )}
        </ul>
    );
};

