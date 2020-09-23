import React ,{Fragment} from "react";
import Axios from "axios";
class ToDoCards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            errMsg:''
        }
    }




    getAllToDO =()=>{
        Axios.get(`http://localhost:9000/todo-api/todo`).then((response)=>{
           this.props.pushAllToDo(response.data)
        }).catch((err)=>{
            this.setState({
                errMsg:err.errMsg
            })
        })
    }

    //method to handle the delete operation
    handleDelete = (todoId) => {
        let isDeleted=window.confirm("Are you sure want to delete this todo ?");
        if(isDeleted)
        {
            //write the logic to delete
            Axios.delete(`http://localhost:9000/todo-api/todo/${todoId}`).then((response)=>{
                this.getAllToDO()
            }).catch((err)=>{
               this.setState({
                err:err.message
               })
            })
        }
        else
        {
            this.getAllToDO()
        }
    }



    render() {
        return (
            <div>
                {/*<h5>{JSON.stringify(this.props.todo)}</h5>*/}
                            <div className="row">
                            {
                                // this.props.todo.length >0 ?
                                    Object.keys(this.props.todo).length !== 0 ?
                                <Fragment>
                                    {
                                        this.props.todo.map((todo)=>{
                                            return(

                                                    <div class="col-md-4">
                                                    <div className="card mt-3">
                                                        <div>
                                                            <div className="card-header bg-dark text-white">
                                                                <p className="h4">{todo.toDoDate}</p>
                                                            </div>
                                                            <div className="card-body ">
                                                                <div className="body_div">
                                                                    <span className="text_todo">{todo.toDoText}</span>
                                                                    <button className="btn btn-danger btn-sm img_card" onClick={this.handleDelete.bind(this,todo.id)}>delete</button>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </Fragment> : null
                            }
                            </div>
            </div>
        );
    }

}
export default ToDoCards