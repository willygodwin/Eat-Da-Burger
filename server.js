const express = require('express');
const path = require('path')

// Set Handlebars.
const exphbs = require('express-handlebars');

// Import routes and give the server access to them.
const routes = require('./app/controller/burgers_controller');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'handlebars');


app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));