import { useState } from 'react';
import '../styles/content.css';

function Experience(props) {
    const info = props.info;
    const [more, setMore] = useState(false);

    const imageSrc = info.image ? new URL(`../assets/${info.image}`, import.meta.url).href : '';

    return (
        <>
            <div className='experience' onClick={() => { setMore(true) }}>
                {imageSrc && <img src={imageSrc} alt={info.name} />}
                <h1>{info.name}</h1>
            </div>
            <div className={`more ${more ? 'show' : ''}`} style={{transitionDelay: (more) ? '0s' : '0.5s'}}>
                <div className='more_content'>
                    <div className='back' onClick={() => {setMore(false)}}>
                        <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.676 26.676" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                    </div>
                    <img src={imageSrc} alt={info.name}></img>
                    <div className='more_info'>
                        <h1>{info.name}</h1>
                        <h2>{info.start_date} - {(info.end_date !== '') ? info.end_date : 'Present'}</h2>
                        <p>{info.description}</p>
                        <h2>Skills:</h2>
                        <div className='exp_skill_list'>
                            {info.skills.map((skill, index) => {
                                return (
                                    <div className='exp_skill'>
                                        {skill}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
