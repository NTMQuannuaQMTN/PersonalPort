import React, { useState, useEffect } from 'react'
import '../styles/content.css'

import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import cpp from '../assets/cpp.svg';
import c from '../assets/c.svg';
import python from '../assets/python.svg';
import sql from '../assets/sql.svg';
import r from '../assets/r.svg';
import java from '../assets/java.svg';
import Skill from './Skill';
import Achievement from './Achievement';

import achievements_data from '../data/achievements.json';
import experience_data from '../data/experiences.json';
import Experience from './Experience';

function Content(props) {
    const [achievements, setAchievements] = useState(0);
    const [achievements_list, setAchievementsList] = useState(achievements_data);
    const [exp, setExp] = useState(0);
    const [experiences_list, setExperiencesList] = useState(experience_data);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const sections = ['about', 'skills', 'achievements', 'experiences'];

            for (let i = sections.length - 1; i >= 0; --i) {
                const element = document.getElementById(sections[i]);

                const rect = element.getBoundingClientRect();

                if (rect.top <= 40) {
                    props.setActive(i);
                    break;
                }
            }
        });
    });

    return (
        <div className='content'>
            <div className='main_content' id='about'>
                <h1>ABOUT ME</h1>
                <p>I am a Frontend Developer living in Ho Chi Minh City, Vietnam.
                    I am currently studying in VNUHCM - High School for the Gifted and majoring in Math.
                    I enjoy learning code to improve my skills.
                </p>
                <div className='contact'>
                    <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.806 473.806" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </g></svg>
                    <p>(+84)376073622</p>
                </div>
                <div className='contact'>
                    <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Mail" d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6 h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017 L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003 L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14 C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401 c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981 l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"></path> </g></svg>
                    <p>nguyentruongmanhquan@gmail.com</p>
                </div>
                <div className='contact'>
                    <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Calendar"> <path d="M60.0002518,6.0037999h-15V1c0-0.5527-0.4472008-1-1-1c-0.5527,0-1,0.4473-1,1v5.0037999H22.0002499V1 c0-0.5527-0.4472008-1-1-1c-0.5527,0-1,0.4473-1,1v5.0037999H3.9997499c-2.2090998,0-4,1.7908001-4,4.0000005V60 c0,2.2090988,1.7909,4,4,4h56.0005035c2.209198,0,4-1.7909012,4-4V10.0038004 C64.0002518,7.7946,62.2094498,6.0037999,60.0002518,6.0037999z M3.9997499,8.0038004h16.0004997V11c0,0.5527,0.4473,1,1,1 c0.5527992,0,1-0.4473,1-1V8.0038004h21.0000019V11c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1V8.0038004h15 c1.1027985,0,2,0.8970995,2,2V17h-60L1.99975,17.0000992v-6.9962988C1.99975,8.9008999,2.8970499,8.0038004,3.9997499,8.0038004z M62.0002518,60c0,1.1027985-0.8972015,2-2,2H3.9997499c-1.1027,0-1.9999999-0.8972015-1.9999999-2V18.9999008L2.0002501,19h60V60z "></path> <path d="M18.0002499,24h-8v8h8V24z M16.0002499,30h-4v-4h4V30z"></path> <path d="M36.0002518,24h-8.0000019v8h8.0000019V24z M34.0002518,30h-4.0000019v-4h4.0000019V30z"></path> <path d="M54.0002518,24h-8v8h8V24z M52.0002518,30h-4v-4h4V30z"></path> <path d="M18.0002499,36h-8v8h8V36z M16.0002499,42h-4v-4h4V42z"></path> <path d="M36.0002518,36h-8.0000019v8h8.0000019V36z M34.0002518,42h-4.0000019v-4h4.0000019V42z"></path> <path d="M18.0002499,48h-8v8h8V48z M16.0002499,54h-4v-4h4V54z"></path> <path d="M36.0002518,48h-8.0000019v8h8.0000019V48z M34.0002518,54h-4.0000019v-4h4.0000019V54z"></path> <path d="M54.0002518,36h-8v8h8V36z M52.0002518,42h-4v-4h4V42z"></path> <path d="M54.0002518,48h-8v8h8V48z M52.0002518,54h-4v-4h4V54z"></path> </g> </g></svg>
                    <p>Nov 1, 2008</p>
                </div>
            </div>
            <hr></hr>
            <div className='main_content' id='skills'>
                <h1>SKILLS</h1>
                <div className='skills_content'>
                    <Skill skill='HTML' image={html}></Skill>
                    <Skill skill='CSS' image={css}></Skill>
                    <Skill skill='JavaScript' image={js}></Skill>
                    <Skill skill='ReactJS' image={react}></Skill>
                    <Skill skill='Bootstrap' image={bootstrap}></Skill>
                    <Skill skill='C++' image={cpp}></Skill>
                    <Skill skill='C' image={c}></Skill>
                    <Skill skill='Python' image={python}></Skill>
                    <Skill skill='SQL' image={sql}></Skill>
                    <Skill skill='R' image={r}></Skill>
                    <Skill skill='React Native' image={react}></Skill>
                    <Skill skill='Java' image={java}></Skill>
                </div>
            </div>
            <hr></hr>
            <div className='main_content' id='achievements'>
                <h1>ACHIEVEMENTS</h1>
                <div className='choices'>
                    <h2 className={(achievements === 1) ? 'active' : ''} onClick={() => { setAchievements((achievements === 1) ? 0 : 1) }}>Academics (Grade 3-5)</h2>
                    <h2 className={(achievements === 2) ? 'active' : ''} onClick={() => { setAchievements((achievements === 2) ? 0 : 2) }}>Academics (Grade 6-12)</h2>
                    <h2 className={(achievements === 3) ? 'active' : ''} onClick={() => { setAchievements((achievements === 3) ? 0 : 3) }}>Innovation and Research</h2>
                </div>
                <div className='achievement_content'>
                    {achievements_list.map(item => {
                        if (item.type === achievements || achievements === 0) {
                            return <Achievement info={item}></Achievement>;
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <hr></hr>
            <div className='main_content' id='experiences'>
                <h1>EXPERIENCES</h1>
                <div className='choices'>
                    <h2 className={(exp === 1) ? 'active' : ''} onClick={() => { setExp((exp === 1) ? 0 : 1) }}>Internships</h2>
                    <h2 className={(exp === 2) ? 'active' : ''} onClick={() => { setExp((exp === 2) ? 0 : 2) }}>Clubs</h2>
                    <h2 className={(exp === 3) ? 'active' : ''} onClick={() => { setExp((exp === 3) ? 0 : 3) }}>Personal Projects</h2>
                </div>
                <div className='experience_content'>
                    {experiences_list.map(item => {
                        if (item.type === exp || exp === 0) {
                            return <Experience info={item}></Experience>;
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Content;