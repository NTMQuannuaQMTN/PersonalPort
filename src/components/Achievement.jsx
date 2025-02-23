import { useState } from 'react';
import '../styles/content.css';

function Achievement(props) {
    const info = props.info;

    const imageSrc = info.image ? new URL(`../assets/${info.image}`, import.meta.url).href : '';

    return (
        <div className='achievement'>
            {imageSrc && <img src={imageSrc} alt={info.name} />}
            <h1>{info.name}</h1>
            <h2>{info.award}</h2>
            <h2>Grade {info.grade}</h2>
        </div>
    )
}

export default Achievement;
