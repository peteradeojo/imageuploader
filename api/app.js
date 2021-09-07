const express = require('express');
const debug = require('debug')('app');
const fileUploader = require('express-fileupload');

const app = express();
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	fileUploader({
		useTempFiles: true,
	})
);

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.use('/upload', require('./routes/uploads.js')());

const PORT = process.env.PORT || 3000;
app.listen(PORT, debug(`Server listening on: ${PORT}`));
