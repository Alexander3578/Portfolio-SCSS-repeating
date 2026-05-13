import './CustomLink.scss'

type CustomLinkPropsType = {
    title: string
    variant?: 'primary' | 'secondary'
    size?: 'lg' | 'md' | 'sm'
    className?: string
}

export const CustomLink = ({title, variant, size, className}:CustomLinkPropsType) => {
    return (
        <a className={`${className} customLink ${variant} ${size} `}>
            {title}
        </a>
    );
};

