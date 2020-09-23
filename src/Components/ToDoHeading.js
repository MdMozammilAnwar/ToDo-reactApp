import React from "react";

class ToDoHeading extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header bg-dark">
                                        <p className="h3 text-white ">Technology Used</p>
                                    </div>
                                    <div className="card-body bg-light">
                                        <ul className="text-left">
                                            <li >Front-End : <span className="text-danger font-weight-bold">ReactJs</span></li>
                                            <li>Design     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="text-danger font-weight-bold">MDBootStrap</span> </li>
                                            <li>Server &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span className="text-danger font-weight-bold">Spring-Boot</span></li>
                                            <li>Database  &nbsp;: <span className="text-danger font-weight-bold">MySQL</span> </li>
                                            {/*<li>Version &nbsp;&nbsp; &nbsp;: <span className="text-danger font-weight-bold">1.0.0.1</span> </li>*/}
                                            <li>Author  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="text-danger font-weight-bold">Md Mozammil Anwar Quadri</span> </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }


}
export default ToDoHeading