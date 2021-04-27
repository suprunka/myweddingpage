import * as types from "../constrainsts"

const initialState= {
    pageSizes:[10, 30, 50, 100],
    pageNumber: 1,
    dataSize:1,
}
export default function reducer(state = initialState, actions) {
    switch(actions.types){
        case types.SET_PAGE_NUMBER:
            return{
                ...state,
                pageNumber:actions.number,
            }
         case types.SET_PAGE_SIZE:
             return{
                ...state,
                pageNumber:actions.number,
            }
         default:    
         return state;
    }   
}

