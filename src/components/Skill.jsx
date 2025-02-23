import { useState } from 'react';
import '../styles/content.css';

function Skill(props) {
    return (
        <div className='skill' style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 1,
            }} />
            <h1>{props.skill}</h1>
        </div>
    )
}

export default Skill;