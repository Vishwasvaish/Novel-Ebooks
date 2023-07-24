const mongoose = require('mongoose');

const url = 'mongodb+srv://vishwasvaish97:realme7@cluster0.10dfrwf.mongodb.net/ebooks?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;