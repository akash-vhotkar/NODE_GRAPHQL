const express = require('express');
const compression = require("compression");
const cors = require('cors');
const bodyparser = require('body-parser');
const helmet = require("helmet");
const { bodyParserGraphQL } = require('body-parser-graphql');

module.exports = (app) => {
    app.disable("x-powered-by");

    app.use(helmet());
    app.use(compression({
        threshold: 512
    }))
    app.use(cors({ origin: "*", optionsSuccessStatus: 200, credentials: true }));
    app.use(bodyparser.json());
    app.use(bodyParserGraphQL());
    app.use(express.static("public"));
}