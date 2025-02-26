const { Event } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');

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

    async create(req, res, next) {
        try {
            const { date, title, text } = req.body;
            const {pic} = req.files
            let fileName = uuid.v4() + ".jpg"
            pic.mv(path.resolve(__dirname, '..', 'static', fileName))
            const newEvent = await Event.create({ date, title, text, pic: fileName });
            res.status(201).json(newEvent);
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new EventController();
