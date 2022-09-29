import React, { useEffect, useState } from 'react';
import './Details.css';
import profile from '../../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { addToDB, getTimeList } from '../utilities/fakeDB';
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = ({ time }) => {
    const [brkTime, setBrkTime] = useState(0);
    useEffect(() => {
        const storedTimeList = getTimeList();
        setBrkTime(storedTimeList['break-time']);
        // console.log(breakTime);
    }, []);

    const setBreakTime = (time) => {
        setBrkTime(time);
        addToDB(time);
    }

    const invokeToast = () => {
        // Swal.fire("Well Done mate!", "success");
        toast.success("Well Done mate! You've completed today's workout.")
    };

    return (
        <div className='d-flex flex-column px-4 details-section container pt-4' id='details-panel'>
            <div className='d-flex align-items-center profile-section'>
                <div className='pe-2'>
                    <img src={profile} alt="" className='rounded' />
                </div>
                <div className='text-start pt-3'>
                    <h4>Nasin A Akash</h4>
                    <h5 className='text-nowrap text-muted fw-lighter'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Jashore, Bangladesh</h5>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center px-2 rounded-3 mt-5 ' style={{ backgroundColor: '#e0dddd9b' }}>
                <div className='px-4 py-2 person-details'>
                    <h3>82<span className='text-muted fs-6'>Kg</span></h3>
                    <h5>Weight</h5>
                </div>
                <div className='px-4 py-2 person-details'>
                    <h3>5.6<span className='text-muted fs-6'>in</span></h3>
                    <h5>Height</h5>
                </div>
                <div className='px-4 py-2 person-details'>
                    <h3>24<span className='text-muted fs-6'>yrs</span></h3>
                    <h5>Age</h5>
                </div>
            </div>
            <div >
                <h4 className='text-start py-5 '>Add A Break</h4>
                <div className='d-flex align-items-center justify-content-center px-2 rounded-3 py-3 button-group' style={{ backgroundColor: '#e0dddd9b' }}>
                    <button onClick={() => setBreakTime(5)} className=' rounded-4 m-2 btn btn-outline-secondary fw-semibold'>05m</button>
                    <button onClick={() => setBreakTime(10)} className=' rounded-4 m-2 btn btn-outline-secondary fw-semibold'>10m</button>
                    <button onClick={() => setBreakTime(15)} className=' rounded-4 m-2 btn btn-outline-secondary fw-semibold'>15m</button>
                    <button onClick={() => setBreakTime(20)} className=' rounded-4 m-2 btn btn-outline-secondary fw-semibold'>20m</button>
                    <button onClick={() => setBreakTime(25)} className=' rounded-4 m-2 btn btn-outline-secondary fw-semibold'>25m</button>
                </div>
                <h4 className='text-start py-5'>Workout Details</h4>
            </div>

            <div className='d-flex align-items-center justify-content-between px-4 rounded-3 py-4' style={{ backgroundColor: '#e0dddd9b' }}>
                <h5 className='text-nowrap workout-show-time'>Workout Time</h5>
                <h5 className='text-muted workout-show-time'><span >{time.toFixed(2)}</span> minutes</h5>
            </div>

            <div className='d-flex align-items-center justify-content-between px-4 rounded-3 py-4 my-4 mb-5' style={{ backgroundColor: '#e0dddd9b' }}>
                <h5 className='text-nowrap workout-show-time'>Break Time</h5>
                <h5 className='text-muted workout-show-time'><span id='workout-time'>{brkTime}</span> minutes</h5>
            </div>
            <button onClick={invokeToast} className='btn btn-success py-4 fs-4 mt-5'>Workout Completed</button>
            <ToastContainer position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover></ToastContainer>
        </div>
    );
};

export default Details;