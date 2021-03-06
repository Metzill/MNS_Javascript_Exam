const path = require('path');
let app = require('express')();
let Data = require('./data/data');

app.listen(5000, () => {
    console.log('Server launch on port : 5000');
});

app.use('/pages', require('express').static('./client/pages'));
app.use('/assets', require('express').static('./client/assets'));

app.use(require('express').json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

//Create
app.post('/data', (req, res) => {
    console.log('mabite');
    Data.push(req.body);
    res.send(Data);
    console.log(req.body);
});

//GetAll
app.get('/data', (req, res) => {
    res.send(Data);
});

//GetOne
app.get('/data/:id', (req, res) => {
    let myId = req.params.id;
    Data.forEach(element => {
        if(element.id == myId) {
            res.send(element);
        }
    });
});

//Delete
app.delete('/delete/:id', (req, res) => {
    const myId = req.params.id;
    Data = Data.filter(element => element.id != myId);
    res.sendStatus(200);
    res.redirect('/pages/liste.html');
});

//Update
app.put('/data', (req, res) => {
    console.log("app.put reached")
    // let myId = req.params.id;
    // Data.forEach(element => {
    //     if(element.id == myId) {
    //         res.send(element);
    //     }
    // });
});