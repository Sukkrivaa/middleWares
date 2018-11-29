import React from "react";
import {connect} from "react-redux";

export default (ChildComponent) => {
    class ComposedComponent extends React.Component {

        componentDidMount(){
            this.shouldNavigateAway()
        }
    
        //so that when we sign out when viewing the restricted components
        componentDidUpdate(){
            this.shouldNavigateAway()
        }
    
        shouldNavigateAway(){
            if(!this.props.auth){
                // console.log("NAVIGATE AWAY")
                this.props.history.push("/"); //for programmatic rerouting
            }
        }
    
        render(){
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.auth
        }
    }

    //It is our job to pass down action creators and history props - without this HOC, they would have been passed down straight to the component - instead, now they are being passed down to us (the actions passed to the connect function would have then be passed down to the main component)
    //that is why we use ...this.props

    return connect(mapStateToProps)(ComposedComponent) //We are applying connect twice when we import this in another file which exports a connected component. This is allowed



}
