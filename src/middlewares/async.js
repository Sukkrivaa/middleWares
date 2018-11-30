export default ({dispatch}) => next => action => {
    //check to see if an action has a promise on its payload property
    //if it does, wait for it to resolve then dispatch
    //if it does not, forward to action to the next middleware
    if(!action.payload || !action.payload.then){
        return next(action)
    }

    //wait for the promise to resolve and get its data
    //whenever we have a .then, we wait for that to run - synchronous
    //when we had the axios.get, we synchronously waited for that part of the promise to run (the part where the request is sent)
    //the asynchronous part was when we had to wait for the response
    //in this case, the synchronous part was getting the response
    action.payload.then((res)=>{
        const newAction = {...action, payload: res}
        dispatch(newAction);
    })
}