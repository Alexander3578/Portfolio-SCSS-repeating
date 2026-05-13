type IconPropsType = {
    className: string
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({ className, iconId, width, height, viewBox }: IconPropsType) => {
    return (
        <svg className = {className}
             width = {width || '21'}
             height={height || '22'}
             viewBox={viewBox || '0 0 21 22'}
             fill={'none'}
             xmlns="http://www.w3.org/2000/svg">
            <use href={`/sprite.svg#${iconId}`}/>
        </svg>
    );
};

