const express = require('express');
const path = require('path');
const rootDir = require('./util/rootDir');
const userRoutes = require('./routes/user');
const booksRoutes = require('./routes/books');

//Setup environment
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));
app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(userRoutes);
app.use(booksRoutes);

app.listen(3000);