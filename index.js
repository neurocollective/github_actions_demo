const express = require('express');
const app = express();

const {
	env: {
		PORT = 3000,
	}
} = process;

app.get('/', (req, res) => {
	res.json({ message: 'hello' });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
