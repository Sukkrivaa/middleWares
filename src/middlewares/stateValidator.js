import tv4 from "tv4";
import stateSchema from "middlewares/stateSchema";

export default ({dispatch, getState}) => next => action => {
    next(action) //this will by default cause the other middlewares to run first and then this one will be last
    //This is because the next function is not preceded by the return statement so everything is still happenning in this scope
    var validStateBool = tv4.validate(getState(), stateSchema);
    if(!validStateBool){
        console.warn("invalid state schema detected")
    }
}