const mongoose = require('mongoose');

const app = require('./app');

const DB = process.env.DATABASE_LOCAL;


mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB connection successful'));

const port = process.env.PORT || 3000;
const sever = app.listen(port, () => {
    console.log(`App running on port ${port}.....`);
})