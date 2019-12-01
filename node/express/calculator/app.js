const express = require('express');
const controll = require('./controller/controller');
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/:rounter',controll.showResult);
app.listen(31222);


