const express = require('express');

const app = express(); // initialize express
const port = 5000;

const userRouter = require('./routers/userRouter');
const cors = require('cors');


app.use(cors());
app.use(express.json());

// middleware
app.use('/user', userRouter);

// to accept request from client
// routing
app.get('/', (req, res) => {
    res.send('response from backend');
});

app.get('/add', (req, res) => {
    res.send('response from add route');
});

// /update
// /delete

app.listen( port, () => {
    console.log('server started on 5000');
}); // listen for requests