import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../../images/logo3.png'
import Workout from '../Workout/Workout';
import Details from '../Details/Details';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers';

const Home = () => {
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, []);

    const [time, setTime] = useState(0);

    const handleAddToList = (workout) => {
        const workoutTime = workout.time;
        setTime(time + workoutTime);
    }

    return (
        <div className='home-container'>
            <div className='activities-container py-5 d-flex flex-column align-items-center'>
                <div className='logo-title-section'>
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="" className='title-img ' />
                        <h3 className='fw-bolder page-title'><span className='fs-1' style={{ color: '#1b45f0' }}>ARM-Strong </span><span style={{ color: '#b105bc' }}>Fitness Club</span></h3>
                    </div>

                </div>
                <h4 className='text-start py-4 pb-5' id='workout-section-starter'>Pick Today's Workout:</h4>

                <div className='workout-section container  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                    {
                        workouts.map(workout => <Workout
                            workout={workout}
                            key={workout.id}
                            handleAddToList={handleAddToList}></Workout>)
                    }
                </div>
                {/* <QuestionAnswers></QuestionAnswers> */}
            </div>


            <div className='details-menu py-5'>
                <Details time={time}></Details>
            </div>
        </div>
    );
};

export default Home;