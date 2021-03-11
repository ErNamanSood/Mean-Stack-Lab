const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) =>res.send('Welcome to my page Name:Naman(1805530)!'));
app.get('/naman', (req, res) =>res.send('Welcome to my page Name:Naman(1805530)!'));
app.listen(port, () =>console.log(`Example app listening on port ${port}!`));
