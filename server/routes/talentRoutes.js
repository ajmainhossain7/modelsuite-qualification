const express = require('express');
const router = express.Router();
const { getAvailableTasks, getMyTasks, claimTask } = require('../controllers/talentController');
const { protect } = require('../middleware/authMiddleware');
// can call these talent routes
router.get('/tasks/available', protect, getAvailableTasks);
router.get('/tasks/mine', protect, getMyTasks);
router.put('/tasks/:id/claim', protect, claimTask);

module.exports = router;
