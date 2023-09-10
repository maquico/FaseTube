const express = require('express');
const env = require('./config/env');
const videoRoutes = require('./routes/videosRouter');

env.config();
const app = express();

// Parse incoming JSON into objects
app.use(express.json());
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));
app.use('/api', videoRoutes);


app.listen(env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${env.PORT}.`);
});