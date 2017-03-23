import {app} from 'one-base';

//Model
app.model(require('model/memberModel.js'));

app.router(require('./router'));

app.start('#root');
