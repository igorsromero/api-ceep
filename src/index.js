const express = require("express");
const routes = require("../routes");
const app = express();

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 3333;

routes(app);

app.listen(port, () => {
    console.log('API RODANDO');
});

module.exports = app;