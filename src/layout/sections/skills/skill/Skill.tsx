type SkillPropsType = {
    skillName: string
    skillImg: string
}
export const Skill = ({skillName, skillImg}:SkillPropsType) => {
    return (
        <li>
            <img src={skillImg} alt={`${skillName}`}/>
            <h3>{skillName}</h3>
        </li>
    );
};

export default Skill;