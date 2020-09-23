import React from "react";
import {Link} from 'react-router-dom'
class NavBar extends React.Component{
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark text-center text-white navbar-expand-sm">
                    <div className="container">
                        <Link to="/" className="navbar-brand nav-link">ToDo App</Link>
                        <div className="container">
                            <Link to="/" className="navbar-brand">All ToDos</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
export default NavBar