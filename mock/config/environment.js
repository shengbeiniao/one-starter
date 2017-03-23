/**
 * CreateDate 2017/02/24
 * Author 张矗
 * Description
 */

const path = require('path');

module.exports = {
  root: path.normalize(__dirname + '/../..'),
  port: process.env.PORT || 9000,
};
