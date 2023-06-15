import { GET_BY_NAME, GET_GAMES } from "../actions"

let initialState = {allGames:[], gamesCopy:[]}
function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_GAMES:
            return{
            ...state,
            allGames:action.payload,
            gamesCopy:action.payload,
           
        }
    case GET_BY_NAME:
        return{
            ...state,
            allGames:action.payload
        }
    
        default :
        return state
    }
}
export default rootReducer