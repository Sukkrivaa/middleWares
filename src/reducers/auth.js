export default (state = false, action) => {
    switch(action.type){
        case "AUTH_CHANGE":
            return !state;
        default:
            return state;
    }
}