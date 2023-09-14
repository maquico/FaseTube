// server/routes/videos.js
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videosController');

// Create a new video
router.post('/videos', videoController.createVideo);

// // Get a video by ID
router.get('/videos/:video_id', videoController.getVideoById);

module.exports = router;
