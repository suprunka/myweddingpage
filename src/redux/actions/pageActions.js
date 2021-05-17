import * as types  from "../constrainsts"
import axios from "axios"
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


export const addMessage=(request)=> {
    return (dispatch) => {
        dispatch({ type: types.POST_MESSAGE_REQUEST });     
        axios.post('https://localhost:5001/Messages', request, { headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
        }})
          .then(function (response) {
              console.log("hjwjjwj")
            dispatch({ type: types.POST_MESSAGE_SUCCESS });     
        })
            .catch(function (error) {
              console.log(error);
              dispatch({ type: types.POST_MESSAGE_SUCCESS });     

            })
    };
}

