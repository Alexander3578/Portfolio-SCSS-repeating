import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import mongo from '../../../assets/images/icon-_1_.webp';
import jest from '../../../assets/images/icon-_2_.webp';
import express from '../../../assets/images/icon-_3_.webp';
import nest from '../../../assets/images/icon-_4_.webp';
import docker from '../../../assets/images/icon (5) (convert.io).webp';
import react from '../../../assets/images/icon (6) (convert.io).webp';
import native from '../../../assets/images/icon (7) (convert.io).webp';
import styled from '../../../assets/images/icon (8) (convert.io).webp';
import redux from '../../../assets/images/icon (9) (convert.io).webp';
import git from '../../../assets/images/icon (10) (convert.io).webp';
import ts from '../../../assets/images/tyoescruipt.webp';
import js from '../../../assets/images/icon.webp';
import postSql from '../../../assets/images/Frame-14.webp';
import darkExpress from '../../../assets/images/darkExpress.webp'
import {Skill} from './skill/Skill.tsx';
import './Skills.scss';
import {useContext, useMemo} from 'react';
import {ThemeContext} from '../../../components/ThemeSwitch.tsx';

const skillsList = [
    {id: '1', iconSrc: js, darkIconSrc: js, skillTitle: 'JAVASCRIPT'},
    {id: '2', iconSrc: ts, darkIconSrc: ts, skillTitle: 'TYPESCRIPT'},
    {id: '3', iconSrc: mongo, darkIconSrc: mongo, skillTitle: 'MONGO DB'},
    {id: '4', iconSrc: postSql, darkIconSrc: postSql, skillTitle: 'POSTGRESQL'},
    {id: '5', iconSrc: jest, darkIconSrc: jest, skillTitle: 'JEST'},
    {id: '6', iconSrc: express, darkIconSrc: darkExpress, skillTitle: 'EXPRESS JS'},
    {id: '7', iconSrc: nest, darkIconSrc: nest, skillTitle: 'NEST JS'},
    {id: '8', iconSrc: docker, darkIconSrc: docker, skillTitle: 'DOCKER'},
    {id: '8', iconSrc: docker, darkIconSrc: docker, skillTitle: 'DOCKER'},
    {id: '9', iconSrc: react, darkIconSrc: react, skillTitle: 'REACT JS'},
    {id: '10', iconSrc: native, darkIconSrc: native, skillTitle: 'REACT NATIVE'},
    {id: '11', iconSrc: styled, darkIconSrc: styled, skillTitle: 'STYLED COMPONENTS'},
    {id: '12', iconSrc: redux, darkIconSrc: redux, skillTitle: 'REDUX'},
    {id: '13', iconSrc: git, darkIconSrc: git, skillTitle: 'GIT'},
]
export const Skills = () => {

    const ctxt = useContext(ThemeContext)

    if (!ctxt)
        return null

    const currentSkills = useMemo(() => {
        return skillsList.map(skill => ({
            ...skill,
            iconSrc:
                ctxt.theme === 'dark'
                    ? skill.darkIconSrc ?? skill.iconSrc
                    : skill.iconSrc,
        }))
    }, [ctxt.theme])

    return (
        <section className={'skillsSection'}>
            <div className={'skillsContainer'}>
                <SectionTitle title={'Skills'}/>
                <ul className={'skillsList'}>
                    {currentSkills.map(skill => <Skill
                        key={skill.id}
                        skillImg={skill.iconSrc}
                        skillName={skill.skillTitle}/>)}
                </ul>
            </div>
        </section>
    );
};

