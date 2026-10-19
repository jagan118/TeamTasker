const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const Todo = require('../models/Todo');

router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ error: 'Team name is required' });
    }

    const team = await Team.create({
      name: name.trim(),
      description: description || ''
    });

    res.status(201).json({
      message: 'Team created successfully',
      team,
      owner: 'Public demo'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/my-teams', async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });
    res.json({
      message: 'Shared demo teams fetched',
      teams: teams.map(team => ({
        ...team.toObject(),
        role: 'owner',
        isOwner: true,
        ownerId: team.owner || null
      })),
      count: teams.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:teamId', async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json({
      team,
      members: [],
      yourRole: 'owner'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:teamId', async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.teamId);

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    await Todo.deleteMany({ teamId: team._id });
    res.json({ message: 'Team and its todos deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
