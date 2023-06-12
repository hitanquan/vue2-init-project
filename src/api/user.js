import axios from "axios";

const getCurrentUser = axios
  .get("/api/user/current")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

export default getCurrentUser;
