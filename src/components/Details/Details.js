import React from 'react';
import './Details.css';
import profile from '../../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Details = () => {
    return (
        <div>
            <div className='d-flex align-items-center profile-section'>
                <div className='pe-2'>
                    <img src={profile} alt="" className='rounded' />
                </div>
                <div className='text-start pt-3'>
                    <h4>Nasin A Akash</h4>
                    <h5 className='text-nowrap text-muted fw-lighter'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Jashore, Bangladesh</h5>
                </div>
            </div>
        </div>
    );
};

export default Details;