import React from 'react';
import './QuestionAnswers.css';

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
                                1. What is the difference between Local and Session Storage ?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <span className="text-primary display-5 fw-semibold">Local Storage </span>

                                <span className="fs-4">
                                    The main difference is that while data in <strong className="text-success">Local
                                        Storage</strong> doesn't
                                    expire, data in
                                    <strong className="text-success">Session Storage</strong>
                                    is cleared when the page session ends. Whenever a document is loaded in a particular
                                    page or tab
                                    in the browser, an unique page session gets created and assigned to that particular
                                    page or tab.
                                    But to get a clear understanding of the topic let's see the differences here.
                                </span>
                                <br /><br /><br />
                                {/* table starts */}
                                <table className="table table-dark table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col">Criteria</th>
                                            <th scope="col">Local Storage</th>
                                            <th scope="col">Session Storage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Storage Type</th>
                                            <td>Permanent</td>
                                            <td>Temporary</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Storage capacity</th>
                                            <td>5-10 mb</td>
                                            <td>5-10 mb</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Auto Expiry</th>
                                            <td>No</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-info fw-semibold">Data Persistance</th>
                                            <td>Till manually deleted</td>
                                            <td>Till browser Tab is closed</td>
                                        </tr>
                                    </tbody>
                                </table><br />
                                {/* table ends */}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                2. How is Global Scope different from Block Scope ?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body fs-4">
                                <strong className="text-danger display-6 fw-semibold">Global scope and Block scope
                                </strong><br /><br />
                                <span className="fs-3 fw-semibold text-success">Global Scope:</span> In Javascript,the
                                global scope is
                                the context where everything in a Javascript program executes by default. The concept
                                includes all variables, objects also references that are not contained within a
                                pre-determined or customized scope. Global scope is the entire Javascript execution
                                environment.
                                <br /><br />
                                <span className="fs-3 fw-semibold text-success">Block Scope:</span>This scope restricts the
                                variable that is declared inside a specific block, from access
                                by the outside of the block. The let and const keyword facilitates the variables to be
                                block scoped. <br /><br />
                                In JavaScript, a variable can also be used without declaring it. If a variable is used
                                without declaring it, that variable automatically becomes a global variable. where there
                                are function scopes, loop condition or if else scopes which are blocks and variables or
                                functions declared inside block scopes can only operate inside the scope.

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

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour">
                                4. How many ways are there to get 'undefined' in Javascript?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body fs-4">
                                <strong>There are <span className="fs-3 text-danger">8 ways</span> in which we can find
                                    <span className="text-danger">"undefined"</span> in
                                    javaScript.</strong><br /><br />
                                <ol className="text-dark fw-normal">
                                    <li>Variable declaration without assigning a value.<br />
                                        Example:<br />
                                        <code>
                                            let a;
                                            console.log(a);
                                        </code>
                                    </li>
                                    <li>Calling a function with no return value.
                                        <br />
                                        Example:<br />
                                        <code>

                                            const addition=sum(5,6);
                                        </code>
                                    </li>
                                    <li>Parameters that are not passed triggers undefined.</li>
                                    <li>If return of a function has nothing to return.</li>
                                    <li>If there is an Object but it's property which is called is missing from that
                                        Object.</li>
                                    <li>Calling an array element by an index which does not exist.</li>
                                    <li>After creating an array when an element is deleted. <br />
                                        Example:<br />
                                        <code>
                                            const array=[54,75,85,12]; <br />
                                            delete array[1];
                                        </code>
                                    </li>
                                    <li>Lastly setting a value directly to 'undefined'.</li><br />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    );
};

export default QuestionAnswers;