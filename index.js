const path = require('path');
let app = require('express')();
const Data = require('./data/data');

app.listen(5000, () => {
    console.log('Server launch on port : 5000');
});

app.use('/pages', require('express').static('./client/pages'));
app.use('/assets', require('express').static('./client/assets'));

app.use(require('express').json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/data', (req, res) => {
    res.send(Data);
});

app.post('/data', (req, res) => {
    Data.push(req.body);
    res.send(Data);
    console.log(req.body);
})

app.get('/data/:id', (req, res) => {
    let myId = req.params.id;
    Data.forEach(element => {
        if(element.id == myId) {
            res.send(element);
        }
    });
});

app.get('/delete/:id', (req, res) => {
    let myId = req.params.id;
    Data.forEach(element => {
        if(element.id == myId) {
            console.log(Data);
        }
    });
});