// server/routes/videos.js
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videosController');

// Create a new video
router.post('/videos/add', videoController.createVideo);

// // Get a video by ID
router.get('/videos/:video_id', videoController.getVideoById);

router.get('/videos/watch/:video_id', videoController.getVideoFileById);

// // Get all videos
router.get('/videos', videoController.getAllVideos);

module.exports = router;
