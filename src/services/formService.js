import axios from "axios"
export function addMessage(request)
{
    axios.post('https://szalone-wesele-api.herokuapp.com/Messages', request, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers":
          "Origin, Content-Type, X-Auth-Token",
  }})
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}