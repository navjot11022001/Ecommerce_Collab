 const initialState=null;
 const UserReducer=(state={initialState:initialState},action)=>{
// if(action.type==="USER")
// {
//     return action.payload;
// }
// if(action.type==="CLEAR"){
//     return null
    switch(action.type){
        case "SET_USER":return {
         ...state, initialState:action.payload
        }

            case "REMOVE_USER":return{ 
                initialState:null
            }
         
        default:
            return state
        };

}
export default UserReducer