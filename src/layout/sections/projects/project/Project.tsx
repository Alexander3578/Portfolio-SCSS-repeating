import './Project.scss'
import {StackItem} from './stackItem/StackItem.tsx';

type ProjectPropsType = {
    imgSrc: string,
    title: string,
    stackList: string[],
    description: string
}

export const Project = ({imgSrc, description, stackList, title}: ProjectPropsType) => {
    return (
        <div className={'projectCard'}>
            <img className={'projectPicture'}
                 src={imgSrc}
                 alt={'project picture'}/>
            <div className={'projectContent'}>
                <h3 className={'projectName'}>{title}</h3>
                <ul className={'stackList'}>
                    {stackList.map(item => <StackItem item={item}/>)}
                </ul>
                <p className={'projectDescription'}>{description}</p>
            </div>
        </div>
    );
};

