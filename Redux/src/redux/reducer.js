
// {type:"ADD", payload:2}

export const reducerFunction=(state, action)=>{
    switch(action.type){
        case "ADD":
            return {...state, counter: state.counter + action.payload}
        case "SUB":
            return {...state, counter:state.counter -action.payload}
        default:
            return state;
    }
}