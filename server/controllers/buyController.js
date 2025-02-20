const { Buy } = require('../models/models');
const ApiError = require('../error/ApiError');

class BuyController {
    async getAll(req, res) {
        try {
            const buys = await Buy.findAll();
            res.json(buys);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getOne(req, res) {
        try {
            const buy = await Buy.findByPk(req.params.id);
            if (!buy) return res.status(404).json({ message: 'Purchase not found' });
            res.json(buy);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const { clientID, eventID } = req.body;
            const newBuy = await Buy.create({ clientID, eventID });
            res.status(201).json(newBuy);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new BuyController();
