import React from "react";
import Axios from "axios";


class ToDoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            todo:{
                toDoDate:'',
                toDoText:''
            },
            isSubmitted:false,
            errMsg:''
        }
    }
    //method to update the state
    updateInput=(event)=>{
        this.setState({
           todo:{
               ...this.state.todo,
               [event.target.name]:event.target.value
           }
        })
    };
    dateChanger=(d)=>{
        {
            let date = new Date(d);

            if ( isNaN( date .getTime() ) )
            {
                return d;
            }
            else
            {

                let month = new Array();
                month[0] = "Jan";
                month[1] = "Feb";
                month[2] = "Mar";
                month[3] = "Apr";
                month[4] = "May";
                month[5] = "Jun";
                month[6] = "Jul";
                month[7] = "Aug";
                month[8] = "Sept";
                month[9] = "Oct";
                month[10] = "Nov";
                month[11] = "Dec";

                let day = date.getDate();

                if(day < 10)
                {
                    day = "0"+day;
                }

                return    day  + " " +month[date.getMonth()] + " " + date.getFullYear();
            }

        }

    };
    // updateDate=(event)=>{
    //     let date=event.target.value;
    //     let finalDate=this.dateChanger(date)
    //    console.log("date :"+event.target.value);
    //     this.setState({
    //         todo:{
    //             ...this.state.todo,
    //             toDoDate:finalDate
    //         }
    //     })
    // };


    updateDate=(event)=>{
        let date=event.target.value;
        let d=new Date();
        let myDate=new Date(date);

       if(d<myDate)
       {

               let finalDate = this.dateChanger(date)

               this.setState({
                   todo: {
                       ...this.state.todo,
                       toDoDate: finalDate
                   }
               })
           return  true;
       }//date closing
        else {
            alert("Please enter future date");
            //Document.toDoForm.toDoData.focus();
           this.searchInput.focus();
           return  this.searchInput.onreset;
       }
    };




    getData=()=>{
        Axios.get(`http://localhost:9000/todo-api/todo`).then((response)=>{
            this.props.pushData(response.data);
        }).catch((err)=>{
            this.setState({
                errMsg:err.message
            })
        })
    }
    //this method is to submit the todo
    submitTodo=(event)=>{
    //    prevent the browser to reload
    event.preventDefault();
    //url
    let url=`http://localhost:9000/todo-api/todo`;
    Axios.post(url,this.state.todo).then((response)=>{
        this.setState({
            isSubmitted:true
        },
        this.getData()
        )
    }).catch((err)=>{
        this.setState({
            errMsg:err
        })
    });
    console.log(this.state)

    };
    render() {
        return (
            <div>
                {/*<pre>{JSON.stringify(this.state)}</pre>*/}

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <p className="h4">ToDo</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form name="toDoForm" action="/" onSubmit={this.submitTodo}>
                                        <div className="form-group">
                                                <input
                                                    required
                                                    type="date"
                                                    name="toDoDate"
                                                    className="form-control"
                                                    placeholder="dd/mm/yyyy"
                                                    onChange={this.updateDate}
                                                    pattern="dd/mm/yyyy"
                                                    ref={(input) => { this.searchInput = input; }}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                required
                                                type="text"
                                                name="toDoText"
                                                className="form-control"
                                                placeholder="write your todo ..."
                                                onChange={this.updateInput}
                                            />
                                        </div>
                                        <button type="reset" className="btn btn-danger btn-sm">
                                            cancel
                                        </button>
                                        <button type="submit" className="btn btn-dark btn-sm">
                                            save
                                        </button>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
export default ToDoForm