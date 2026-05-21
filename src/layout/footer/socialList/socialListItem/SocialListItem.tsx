import {Icon} from '../../../../components/icon/Icon.tsx';
import './SocialListItem.scss'

type SocialListItemPropsType = {
    iconSpriteId: string
    iconName: string
}
export const SocialListItem = ({iconName, iconSpriteId}:SocialListItemPropsType) => {
    return (
        <li className = {'socialListItem'}>
            <Icon className={'socialIcon'} iconId={iconSpriteId} width={'38'} height={'38'} viewBox={'0 0 38 38'}/>
            <small className={'socialListItemName'}>{iconName}</small>
        </li>
    );
};

