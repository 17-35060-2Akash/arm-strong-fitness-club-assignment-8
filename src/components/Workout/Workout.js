import React from 'react';
import './Workout.css';

const Workout = ({ workout, handleAddToList }) => {
    const { img, activity_name, time, age } = workout;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-start ms-2">
                    <h5 className="card-title pt-2">{activity_name}</h5>
                    <h6>Age Group: {age}</h6>
                    <h6>Workout Time: {time} minutes</h6>
                </div>
                <button onClick={() => handleAddToList(workout)} className='btn-add-to-list btn btn-outline-secondary'>
                    Add To List
                </button>
            </div>
        </div>
    );
};

export default Workout;

