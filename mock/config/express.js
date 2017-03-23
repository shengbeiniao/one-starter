/**
 * CreateDate 2017/02/24
 * Author 张矗
 * Description
 */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(express.query());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
};
