const express = require('express');
const env = require('dotenv');
const path = require('path');
const cors = require('cors');
const videoRoutes = require('./routes/videosRouter');

env.config();
const app = express();

app.use(cors());

// Parse incoming JSON into objects
app.use(express.json());
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api', videoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}.`);
    
});