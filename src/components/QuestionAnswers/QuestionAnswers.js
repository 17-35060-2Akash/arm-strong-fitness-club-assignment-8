import React from 'react';
import './QuestionAnswers.css';
import img from '../../images/Group-3-1.jpg';

const QuestionAnswers = () => {
    return (
        // blog section starts 
        <div id="accordian-container" className="py-5 my-5">
            <div className="container mb-5" id="frequently-asked">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                1. How does React work ?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <span className="text-primary display-5 fw-semibold">ReactJS </span>

                                <span className="fs-4">
                                    ,the evolutionary and infamous <span className='text-success fw-semibold'>JavaScrpt library</span> for building user interfaces which is
                                    fast, declaraive and flexible at the same time. Initially developped and maintaind by FB which is swift and
                                    <span className='text-primary fw-semibold'> component based</span>.
                                    React basically breaks web elements down into resuable components making it easy to manage
                                    complex user interfaces with it's <span className='fs-3 text-success fw-semibold'>virtual DOM algorithm</span>.
                                    <br /><br /><br />
                                    Reacts virtual DOM is a JS representation of the actual DOM which is a lightweighted blue print of the actual one.
                                    When react publishes a DOm it keeps a copy of that actual DOM which is called the virtual DOM. When updates are made react makes another
                                    copy of the virtual DOM and runs <span className='fs-3 text-primary fw-semibold'>'diff algorithm'</span> between those two. Bt these
                                    react can figure out where to change and at last updates the Actual DOM.
                                </span>
                                <br /><br /><br />
                                <img src={img} alt="" style={{ width: '600px' }} />
                                <br /><br />

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                2.What are the differences between Props and State ?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body fs-4">
                                <strong className="text-info display-6 fw-semibold">Props vs State
                                </strong><br /><br />
                                <div className='text-start'>
                                    <span className="fs-3 fw-semibold text-success">Props: </span> In React, Props are used to pass data from one component to another. The state is a local data storage that
                                    is local to the component only and cannot be passed to other components.
                                    <br /><br />
                                </div>
                                <div className='text-start'>
                                    <span className="fs-3 fw-semibold text-success">State: </span>The State is a built-in react object that
                                    is used to contain data or information about the component.
                                    A component's state can change over time; whenever it changes, the component re-renders.
                                    <br /><br />
                                    <h4>Here are some differences between them below:</h4>
                                </div>

                                {/* table starts */}
                                <table className="table table-dark table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Criteria</th>
                                            <th scope="col">Props</th>
                                            <th scope="col">State</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Data <br /> Passage</th>
                                            <td className='fs-5'>Data is passed from one component to another.</td>
                                            <td className='fs-5'>Data is passed within the component only.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Modification</th>
                                            <td>Immutable</td>
                                            <td>is Mutable</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Usage</th>
                                            <td>can be used with state and functional components.</td>
                                            <td>only with the state components/class component in previous. </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Access</th>
                                            <td>Props are read-only.</td>
                                            <td>State is both read and write.</td>
                                        </tr>
                                    </tbody>
                                </table><br />
                                {/* table ends */}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                3. What is javascript EventLoop?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div
                                className="accordion-body fs-4 d-flex justify-content-between align-items-center flex-column flex-md-row flex-lg-row">
                                <div>
                                    <strong>The event loop is a mechanism that allows JavaScript to perform non-blocking
                                        operations consistantly. </strong> <br /><br />

                                    <strong className="text-success">The event queue</strong> is responsible for sending new
                                    functions to the
                                    stack for
                                    processing. It follows the queue data structure to maintain the correct sequence in
                                    which all operations should be sent for execution. <br /><br />
                                    <img className="img-fluid" src="images/eventloop.png" alt="" />
                                    There are <strong>three</strong> main structures that we need to understand in the
                                    loop. The <strong className="text-info">Stack</strong> ,
                                    the <strong className="text-info">Heap</strong> and the <strong
                                        className="text-info">Callback Queue</strong>.
                                    There are objects which are in the heap. The tasks of the stack is primarily
                                    executed. The tasks which are asynchronous those are pushed in the queue and when
                                    the stack gets free
                                    it pulls a request from the queue. By this process the system does not slow down.
                                </div>
                                <div>
                                    <img className="img-fluid w-50" src="images/csssbox.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >

    );
};

export default QuestionAnswers;