const express = require('express');
const app = express();
const data = {
  name: 'swl',
  age: 20
};
app.get('/', (req, res) => {
  console.log(req.query);
  const script = 'callback' + '(' + JSON.stringify(data) + ')';
  res.send(script);
});
app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log('服务器成功挂起');
});
