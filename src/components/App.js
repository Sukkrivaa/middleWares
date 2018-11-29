import React from "react";
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import CommentList from "components/CommentList"
import CommentBox from "components/CommentBox";
import * as actions from "actions";

class App extends React.Component {

    renderButton(){
        if(this.props.auth){
            return (
                <button onClick={this.props.changeAuth}>
                    Sign out
                </button>
            )
        }else{
            return (
                <button onClick={this.props.changeAuth}>
                    Sign in
                </button>
            )
        }
    }


    renderHeader(){
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">CommentList</Link>
                    </li>
                    <li>
                        <Link to="/post">Comment Box</Link>
                    </li>
                    <li>
                        {this.renderButton()}
                    </li>
                </ul>
            </div>
        )
    }

    render(){
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route exact path="/" component={CommentList} />
            </div>
        );
    }
    
}

export default connect(state => {return {auth: state.auth}}, actions)(App)