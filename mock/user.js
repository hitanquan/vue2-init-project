function createUserList() {
  return [
    {
      userId: 1,
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "admin",
      password: "111111",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token",
    },
    {
      userId: 2,
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "system",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token",
    },
    {
      userId: 3,
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "wangwu",
      password: "wangwu2023.com",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token",
    },
  ];
}

export function login(username, password) {
  //调用获取用户信息函数,用于判断是否有此用户
  const checkUser = createUserList().find(
    (item) => item.username === username && item.password === password
  );
  //没有用户返回失败信息
  if (!checkUser) {
    return { code: 201, success: checkUser, data: {}, message: "账号或者密码不正确!" };
  }
  //如果有返回成功信息
  return {
    code: 200,
    success: checkUser,
    data: { username: username, password: password },
    message: "登录成功!",
  };
}
