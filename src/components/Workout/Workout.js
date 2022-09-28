import React from 'react';
import './Workout.css';

const Workout = (props) => {
    const { img, activity_name, time, age } = props.workout;
    return (
        <div className='workout'>
            <img src={img} alt="" />
            <div className='text-start ms-4 py-2'>
                <h3 className='py-2'>{activity_name}</h3>
                <h6>Age Group: {age}</h6>
                <h6>Workout Time: {time} minutes</h6>
            </div>
            <button className='btn-add-to-list btn btn-outline-secondary'>
                Add To List
            </button>

        </div>
    );
};

export default Workout;