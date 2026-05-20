import './CustomLink.scss'
import {Link} from 'react-scroll';

type BaseProps = {
    title: string
    variant?: 'primary' | 'secondary'
    customSize?: 'lg' | 'md' | 'sm'
    className?: string
}

type LinkProps = BaseProps & React.ComponentProps<typeof Link> & {
    as?: 'link'
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button'
}

type CustomLinkProps = LinkProps | ButtonProps


export const CustomLink = (props: CustomLinkProps) => {
    const { title, variant, customSize, className, as = 'link', ...rest } = props as any

    const classes = `${className ?? ''} customLink ${variant ?? ''} ${customSize ?? ''}`

    if (as === 'button') {
        return (
            <button className={classes} {...rest}>
                {title}
            </button>
        )
    }

    return (
        <Link className={classes} {...rest}>
            {title}
        </Link>
    )
}

