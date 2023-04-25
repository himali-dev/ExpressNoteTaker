// Required Files
const express = require('express');


// Route declaration
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Express server creation
const app = express();

// PORT Setting
const PORT = process.env.PORT || 3000;

// incoming data parsing
app.use(express.urlencoded({ extended: true }));

// incoming json parsinf
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`App is ready on ${PORT}`);
});
