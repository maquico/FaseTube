// videoController.js
const connection = require('../config/db');

// Create a new video
const createVideo = (req, res) => {
  const { titulo, miniatura_ruta, video_ruta, descripcion } = req.body;
  const sql = 'INSERT INTO VIDEOS (titulo, miniatura_ruta, video_ruta, descripcion) VALUES (?, ?, ?, ?)';
  const values = [titulo, miniatura_ruta, video_ruta, descripcion];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating video' });
    } else {
      res.status(201).json({ message: 'Video created successfully' });
    }
  });
};

module.exports = {
  createVideo,
  // Define other controller functions here
};
