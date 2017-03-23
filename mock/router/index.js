/**
 * CreateDate 2017/02/24
 * Author 张矗
 * Description
 */

module.exports = function(app) {
  app.use('/api/member',require('./memberRouter'));
  require('./error')(app);
};
