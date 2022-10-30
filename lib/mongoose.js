'use strict';

const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbname = process.env.DB_NAME;

module.exports = {
    connect: () => {
        try {
            const connectionString = `mongodb://localhost:27017/sample`;
            console.log(connectionString);
            const options = { useNewUrlParser: true, useUnifiedTopology: true };
            mongoose.connect(connectionString, options).catch(err => {
                if (err) {
                    console.log(err);
                }
            });
            mongoose.set('autoCreate', true);
            console.log("Database connected... ");
            return mongoose;
        } catch (e) {
            console.log(e);
        }
    }
};
