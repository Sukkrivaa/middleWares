import React from "react";
import {connect} from "react-redux";
import * as actions from "actions";
import requireAuth from "components/HOC/requireAuth"


class CommentBox extends React.Component {
    state = {comment: ""}

    //component just rendered    
    // componentDidMount(){
    //     this.shouldNavigateAway()
    // }

    // //so that when we sign out when viewing the restricted components
    // componentDidUpdate(){
    //     this.shouldNavigateAway()
    // }

    // shouldNavigateAway(){
    //     if(!this.props.auth){
    //         // console.log("NAVIGATE AWAY")
    //         this.props.history.push("/"); //for programmatic rerouting
    //     }
    // }


    //The above lines are what are reusable so we should move it into a higher order component




    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);


        this.setState({
            comment: ""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <button>Submit this comment</button>
                </form>
                <button data-test={"fetch-button"} onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}



export default connect(null, actions/*Short cut for wiring up all action creators */)(requireAuth(CommentBox));