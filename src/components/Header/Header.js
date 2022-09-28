import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#101b22' }}>
                <div className="container d-flex flex-nowrap header-items">
                    <div className="d-flex justify-content-center align-items-center ps-5">
                        <a target="_blank" className="navbar-brand" href="/page">
                            <img id='logo-img' className="" src={logo} alt='' />
                        </a>
                    </div>

                    <div className="ms-4 d-flex justify-content-center align-items-center" >
                        <button className="navbar-toggler btn-menu " type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                    </div>

                </div>
                <div className="collapse navbar-collapse nav-list pe-5" id="navbarNav">
                    <ul className="navbar-nav header-list">
                        <li className="nav-item me-5">
                            <a id="news-btn" className="nav-link fw-semibold fs-5 line-underlined text-white" aria-current="page"
                                href="/home">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="blog-btn" className="nav-link fw-semibold fs-5 line-underlined text-white"
                                href="#discover-our-course-title">Workouts</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="blog-btn" className="nav-link fw-semibold fs-5 line-underlined text-white text-nowrap"
                                href="#discover-our-course-title">Fitness Kits</a>
                        </li>
                        <li className="nav-item me-5">
                            <a id="blog-btn" className="nav-link fw-semibold fs-5 line-underlined text-white"
                                href="#discover-our-course-title">Q/A</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
};

export default Header;


