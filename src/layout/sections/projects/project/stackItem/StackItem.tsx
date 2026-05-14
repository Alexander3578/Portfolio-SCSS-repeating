import './StackItem.scss'

export const StackItem = ({item}:{item: string}) => {
    return (
        <li className={'stackItem'}>
            {item}
        </li>
    );
};

