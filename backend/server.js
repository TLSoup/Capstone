const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const uri = "mongodb+srv://TLSoup:1234@fitly.sj9e4.mongodb.net/Fitly?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection extablished successfully");
});

app.use('/users', require('./routes/users.routes'));
app.use('/clothing', require('./routes/clothing.routes'));

app.get("/", (req, res) => {
    res.send(`I am in the correct rute on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`);
});