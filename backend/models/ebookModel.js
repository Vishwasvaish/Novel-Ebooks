const { Schema, model } = require('../connection');

// defining the structure of data to store
const myschema = new Schema({
    title: String,
    coverpage : String,
    author : String,
    publisher : String,
    credits : String,
    date : Date,
    file: String,
    createdAt: Date
});

module.exports = model('ebooks', myschema);