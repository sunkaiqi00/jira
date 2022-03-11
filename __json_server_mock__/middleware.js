module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    const { userName, password } = req.body;
    if (userName === "admin" && password === "123456") {
      return res.status(200).json({
        user: {
          name: userName,
          id: Number(
            Math.random()
              .toString()
              .slice(2, Math.ceil(Math.random() * 10))
          ),
          token: "DBUD4563=sdfhb2134sCABc",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误" });
    }
  }
  next();
};
