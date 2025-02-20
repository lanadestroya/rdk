const { Event } = require('../models/models');
const ApiError = require('../error/ApiError');

class EventController {
    async getAll(req, res) {
        try {
            const events = await Event.findAll();
            res.json(events);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getOne(req, res) {
        try {
            const event = await Event.findByPk(req.params.id);
            if (!event) return res.status(404).json({ message: 'Event not found' });
            res.json(event);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const { date, title, text, pic } = req.body;
            const newEvent = await Event.create({ date, title, text, pic });
            res.status(201).json(newEvent);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new EventController();
