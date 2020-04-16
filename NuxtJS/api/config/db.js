const dbConfig = require("./db.config");

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true
                          });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log(`Successvol verbonden met MongoDB. op database: ${dbConfig.DB}`);
});

module.exports = db
