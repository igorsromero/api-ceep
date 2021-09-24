const express = require("express");

const notas = require('./notasRoute')

module.exports = app => {

    app.use(express.json());

    app.use(notas);

};