const express = require('express');
const Controller = require('./api/controller');

const app = express();
const port = 3000 || process.env.PORT;
const controller = new Controller();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/api').post((req, res) => {
    let url = req.body.url;
    let response = controller.post(url);
    res.send(response);
});

app.route('/api/:shortener_url').get((req, res) => {
    let shortener = req.params.shortener_url;
    let response = controller.get(shortener);

    if (response && typeof(response) === 'object') {
        res.send(response);
    }

    res.status(404).end();
});

app.listen(port, () => {
    console.log('app listening in port', port);
});
