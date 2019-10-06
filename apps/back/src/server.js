'use strict';

const express = require('express');

const config = require('./config/config.json');

const app = express();

app.get('/', (req, res) => {
	res.send('Marble project API\n');
});

app.listen(config.node_port, config.node_host);

console.log(`${config.app_name} listening on port ${config.node_host}:${config.node_port}`);