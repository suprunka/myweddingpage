import axios from "axios"
export function addMessage(request)
{
    axios.post('https://szalone-wesele-api.herokuapp.com/Messages', request)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}