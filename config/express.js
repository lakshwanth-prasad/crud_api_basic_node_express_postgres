const express = require('express');
const cors = require('cors');

function setupExpress(app) {
  app.use(cors());
}

module.exports = {
  setupExpress,
};
