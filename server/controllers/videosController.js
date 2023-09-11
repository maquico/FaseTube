// videoController.js
const connection = require('../config/db');

// Create a new video
const createVideo = (req, res) => {
  const { video_id, duracion, fecha_publicacion, titulo, miniatura_ruta, video_ruta, descripcion } = req.body;
  const sql = 'INSERT INTO VIDEOS ( video_id, duracion, fecha_publicacion, titulo, miniatura_ruta, video_ruta, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [video_id, duracion, fecha_publicacion, titulo, miniatura_ruta, video_ruta, descripcion];

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
