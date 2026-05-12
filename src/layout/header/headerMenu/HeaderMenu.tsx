import './HeaderMenu.scss'

const headerItemsList = [
    {title: 'Projects', id: 'projects'},
    {title: 'Contact', id: 'contact'}
]

export const HeaderMenu = () => {
    return (
        <nav>
            <ul className="navList">
                {headerItemsList.map(item => {
                    return (
                        <li key={item.id}
                            className={"listItem"}>
                            <a className = {"headerLink"}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

