import axios from "./myAxios";

export function getCurrentUser() {
  return axios
    .get("/user/current")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 登录方法
export function login(userAccount, userPassword) {
  const data = {
    userAccount,
    userPassword,
  };
  return axios({
    url: "/user/login",
    headers: {
      isToken: false,
    },
    method: "post",
    data: data,
  });
}
