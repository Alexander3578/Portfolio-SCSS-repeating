import './Skill.scss'

type SkillPropsType = {
    skillName: string
    skillImg: string
}
export const Skill = ({skillName, skillImg}:SkillPropsType) => {
    return (
        <li className={'skillItem'}>
            <img className={'skillPicture'}
                 src={skillImg} alt={`${skillName}`}/>
            <h3 className={'skillName'}>{skillName}</h3>
        </li>
    );
};

