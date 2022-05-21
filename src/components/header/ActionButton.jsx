import React from 'react';
import CWL from '../../assets/ChangwooLee-SoftwareEngineer.pdf';

const ActionButton = () => {
    return (
        <div className="action__button">
            <a href={CWL} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Click to Contact</a>
        </div>
    )
}

export default ActionButton