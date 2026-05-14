import {Project} from './project/Project.tsx';
import './Projects.scss';
import projectPicture from '../../../assets/images/image.webp'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';


const projectsListData = [
    {
        id: '1',
        imgSrc: projectPicture,
        title: 'TITLE PROJECT',
        stackList: ['JAVASCRIPT', 'POSTGRESQL', 'REACT', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
    {
        id: '2',
        imgSrc: projectPicture,
        title: 'INSIGHTGRAM',
        stackList: ['JAVASCRIPT', 'REACT NATIVE', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
    {
        id: '3',
        imgSrc: projectPicture,
        title: 'TITLE PROJECT',
        stackList: ['JAVASCRIPT', 'POSTGRESQL', 'REACT', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
    {
        id: '4',
        imgSrc: projectPicture,
        title: 'INSIGHTGRAM',
        stackList: ['JAVASCRIPT', 'REACT NATIVE', 'REDUX'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet'
    },
]

export const Projects = () => {
    return (
        <section className={'projectSection'}>
            <div className={'projectContainer'}>
                <SectionTitle title={'Projects'}
                              className={'projectTitle'}/>
                <div className={'stackListWrapper'}>
                    {projectsListData.map(item =>
                        <Project key={item.id}
                                 imgSrc={item.imgSrc}
                                 title={item.title}
                                 stackList={item.stackList}
                                 description={item.description}/>
                    )}
                </div>
            </div>
        </section>
    );
};

