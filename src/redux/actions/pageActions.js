import * as types  from "../constrainsts"

export const setPageSize=(pageSize)=> {

    return (dispatch) => {
        dispatch({ type: types.SET_PAGE_SIZE, size:pageSize });     
    };
}


export const setPageNumber=(pageNumber)=> {
    return (dispatch) => {
        dispatch({ type: types.SET_PAGE_NUMBER, number:pageNumber });     
    };
}

