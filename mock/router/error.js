/**
 * CreateDate 2017/02/24
 * Author 张矗
 * Description
 */

module.exports=function(app) {
  app.use(function(err,req,res,next){
    switch (err.type){
      case '401':res.status(401).send('未授权'); break;
      case '500':res.status(500).send('服务器异常');break;
      default:res.json({
        code:err.code,
        content:err.message
      })
    }
  });
};
