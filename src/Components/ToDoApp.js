import React from "react";
import ToDoHeading from "./ToDoHeading";
import ToDoForm from "./ToDoForm";

import ToDoCards from "./ToDoCards";
import AllToDO from "./AllToDO";

class ToDoApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            toDoData:[],
            errMsg:''
        }

    }
    fetchData=(data)=>{
        this.setState({
            toDoData:data
        })
    }


    render() {
        return (
            <div>
                {/*<pre>{JSON.stringify(this.state.toDoData)}</pre>*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <ToDoHeading/>
                        </div>
                        <div className="col-md-6">
                            <ToDoForm pushData={this.fetchData}/>
                        </div>
                    </div>
                    <br/>
                    <hr className="hr-dark"/>
                    <div className="container">

                            <ToDoCards todo={this.state.toDoData}   pushAllToDo={this.fetchData}/>

                    </div>

                    <AllToDO pushAllToDo={this.fetchData}/>
                </div>
            </div>
        );
    }

}
export default ToDoApp