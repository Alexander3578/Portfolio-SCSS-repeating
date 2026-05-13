import './SectionTitle.scss'

type SectionTitlePropsType = {
    title: string
    className?: string
}

export const SectionTitle = ({title, className}:SectionTitlePropsType) => {
    return (
        <h2 className = {`${className} sectionTitle`}>
            {title}
        </h2>
    );
};

