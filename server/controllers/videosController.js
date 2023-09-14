// videoController.js
const prisma = require('../config/db');

// Create a new video
const createVideo = async (req, res) => {
  try {
    const {
      video_id,
      duracion,
      fecha_publicacion,
      titulo,
      miniatura_ruta,
      video_ruta,
      descripcion,
    } = req.body;

    // Use Prisma to create a new video record
    const video = await prisma.VIDEOS.create({
      data: {
        video_id,
        duracion,
        fecha_publicacion,
        titulo,
        miniatura_ruta,
        video_ruta,
        descripcion,
      },
    });

    res.status(201).json({ message: 'Video created successfully', video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating video' });
  }
};

const getVideoById = async (req, res) => {
  try {
    let { video_id } = req.params;
    video_id = Number(video_id);
    const video = await prisma.VIDEOS.findUnique({
      where: { video_id },
    });
    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting video' });
  }
}

const getAllVideos = async (req, res) => {
  try {
    const videos = await prisma.VIDEOS.findMany();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting videos' });
  }
}

module.exports = {
  createVideo,
  getVideoById,
  getAllVideos
};


