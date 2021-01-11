const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(layouts);

app.get('/', (req, res) => {
    res.render('home');
});

//Controllers and routes
//everything that is a URL must start with a forward slash
app.use('/love-it', require('./controllers/loveIt'));
app.use('/leave-it', require('./controllers/leaveIt'));

app.listen(8000, () => console.log(`smooth sounds`));