 const initialState=null;
 const UserReducer=(state=initialState,action)=>{
// if(action.type==="USER")
// {
//     return action.payload;
// }
// if(action.type==="CLEAR"){
//     return null
    switch(action.type){
        case "USER":return action.payload;

            case "CLEAR":return null;
         
        default:
            return state
        };

}
export default UserReducer