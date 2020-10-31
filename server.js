const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
	res
		.status(202)
		.cookie('Name', 'Rahul Ahire', {
			sameSite: 'strict',
			path: '/',
			expires: new Date(new Date().getTime() + 100 * 1000),
            httpOnly: true,
		}).send("cookie being initialised")
});
app.get('/deleteCookie', (req, res) => {
	res
		.status(202)
		.clearCookie('Name').send("cookies cleared")
});
app.listen(4000);
