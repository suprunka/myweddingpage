import * as types from "../constrainsts"

const initialState= {
    pageSizes:[10, 30, 50, 100],
    pageNumber: 1,
    dataSize:1,
    loading:false,
}
export default function reducer(state = initialState, actions) {
    switch(actions.type){
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
         case types.POST_MESSAGE_SUCCESS:
            return{
               ...state,
               loading:false
           }

         case types.POST_MESSAGE_REQUEST:
          return{
             ...state,
             loading:true,
         }
         default:    
         return state;
    }   
}

