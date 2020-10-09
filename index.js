const app = require('express')();
const bodyParser = require('body-parser');
let buff = [];
const port = 8080;

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/health', (req, res) => {
    res.send('OK');
});

app.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.items && Array.isArray(req.body.items))
    {
        buff = [...buff, ...req.body.items];
        res.send('items saved');
    } else {
        res.send('items is empty or is not array');
    }
});

app.get('/', (req, res) => {
    res.json(buff).send();
});

setInterval(() => { buff = []; }, 60000);

app.listen(port, () => {
    console.log(`Server started on ${port} port 🤪`);
});