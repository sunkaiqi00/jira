module.exports = (req, res, next) => {
  if (req.method?.toUpperCase() === 'POST' && req.path === '/login') {
    const { username, password } = req.body;
    if (username === 'kaihuai' && password === '123456') {
      return res.status(200).json({
        user: {
          token: '123',
        },
      });
    } else {
      return res.status(400).json({ msg: '用户名或密码错误' });
    }
  }
  next();
};
