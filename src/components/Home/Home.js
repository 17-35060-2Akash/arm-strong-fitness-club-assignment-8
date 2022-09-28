import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../../images/logo3.png'
import Workout from '../Workout/Workout';
import Details from '../Details/Details';

const Home = () => {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, []);

    return (
        <div className='home-container'>
            <div className='activities-container py-5'>
                <div className='container ms-3'>
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="" className='title-img me-3' />
                        <h3 className='fw-bolder'><span className='fs-1' style={{ color: '#1b45f0' }}>ARM-Strong </span><span style={{ color: '#b105bc' }}>Fitness Club</span></h3>
                    </div>
                    <h4 className='text-start py-4'>Pick Today's Workout:</h4>
                </div>

                <div className='workout-section container'>
                    {
                        workouts.map(workout => <Workout
                            workout={workout}
                            key={workout.id}></Workout>)
                    }
                </div>
            </div>


            <div className='details-menu py-5'>
                <Details></Details>
            </div>
        </div>
    );
};

export default Home;