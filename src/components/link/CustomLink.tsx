import './CustomLink.scss'

type BaseProps = {
    title: string
    variant?: 'primary' | 'secondary'
    size?: 'lg' | 'md' | 'sm'
    className?: string
}

type LinkProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: 'a'
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button'
}

type CustomLinkProps = LinkProps | ButtonProps


export const CustomLink = (props: CustomLinkProps) => {
    const { title, variant, size, className, as = 'a', ...rest } = props as any

    const classes = `${className ?? ''} customLink ${variant ?? ''} ${size ?? ''}`

    if (as === 'button') {
        return (
            <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
                {title}
            </button>
        )
    }

    return (
        <a className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
            {title}
        </a>
    )
}

