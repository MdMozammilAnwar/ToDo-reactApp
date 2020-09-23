import React from "react";
import Axios from "axios";
class AllToDO extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            err:''
        }
    }

    //pushAllToDo
    componentDidMount() {
        Axios.get(`http://localhost:9000/todo-api/todo`).then((response)=>{
            this.props.pushAllToDo(response.data)
        }).catch((err)=>{
            this.setState({
            err:err.message
            })
        })
    }

    render() {
        return (
            <div>


            </div>
        );
    }

}
export default  AllToDO