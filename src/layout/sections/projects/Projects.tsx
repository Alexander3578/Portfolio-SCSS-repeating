import {Project} from './project/Project.tsx';
import './Projects.scss';
import projectPicture from '../../../assets/images/image.webp';
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {useEffect, useState} from 'react';
import {CustomLink} from '../../../components/link/CustomLink.tsx';

const projectsListData = [
    {
        id: '1',
        imgSrc: projectPicture,
        title: 'TITLE PROJECT',
        stackList: ['JAVASCRIPT', 'POSTGRESQL', 'REACT', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        id: '2',
        imgSrc: projectPicture,
        title: 'INSIGHTGRAM',
        stackList: ['JAVASCRIPT', 'REACT NATIVE', 'REDUX'],
        description: 'Description'
    },
    {
        id: '3',
        imgSrc: projectPicture,
        title: 'TITLE PROJECT',
        stackList: ['JAVASCRIPT', 'POSTGRESQL', 'REACT', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        id: '4',
        imgSrc: projectPicture,
        title: 'INSIGHTGRAM',
        stackList: ['JAVASCRIPT', 'REACT NATIVE', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
];

const BREAKPOINT = 894;
const MOBILE_ITEMS_COUNT = 2;

export const Projects = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const [visibleProjects, setVisibleProjects] =
        useState(MOBILE_ITEMS_COUNT);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = width <= BREAKPOINT;

    const displayedProjects = isMobile
        ? projectsListData.slice(0, visibleProjects)
        : projectsListData;

    const showMoreProjects = () => {
        setVisibleProjects(prev => prev + MOBILE_ITEMS_COUNT);
    };

    return (
        <section
            id={'projects'}
            className={'projectSection'}
        >
            <div className={'projectContainer'}>
                <SectionTitle
                    title={'Projects'}
                    className={'projectTitle'}
                />

                <div className={'stackListWrapper'}>
                    {displayedProjects.map(item => (
                        <Project
                            key={item.id}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            stackList={item.stackList}
                            description={item.description}
                        />
                    ))}
                </div>

                {isMobile &&
                    visibleProjects < projectsListData.length && (
                        <CustomLink as={'button'}
                                    title={'SEE ALL PROJECTS'}
                                    variant={'primary'}
                                    className={'showMoreBtn'}
                                    onClick={showMoreProjects}/>
                    )
                }
            </div>
        </section>
    );
};