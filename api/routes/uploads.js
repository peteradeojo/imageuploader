const express = require('express');

const router = express.Router();

module.exports = () => {
	router.get('/', (req, res) => {
		res.send('Hello World');
	});

	router.post('/add', (req, res) => {
		if (!req.files || req.files.length < 1) {
			return res.json({ error: 'No files' });
		}
		res.json({ msg: 'Thanks' });
	});

	return router;
};
