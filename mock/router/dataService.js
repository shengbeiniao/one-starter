/**
 * CreateDate 2017/02/24
 * Author 张矗
 * Description
 */

const _=require('lodash');
const mockjs = require('mockjs');

module.exports.query=function(modal){
  return (req,res,next)=>{
    let filter = req.query.filter||{};
    let list=modal.list;
    //排序
    let sort =req.query.sort||[];
    if(typeof sort==='string'){
      sort=[sort];
    }
    let sortKeys=[];
    let sortRules=[];
    sort.forEach(rule=>{
      let rules=rule.split(',');
      sortKeys.push(rules[0]);
      sortRules.push(rules[1]);
    });
    list=_.orderBy(list,sortKeys,sortRules);
    //分页
    let pageSize = req.query.pageSize || 10;
    let pageNum = req.query.pageNum || 1;
    list=list.slice((pageNum - 1) * pageSize, pageNum * pageSize);
    list=_.filter(list,filter);
    res.status(200).json({
      data:list,
      total:modal.total,
      code:'200'
    });
  };
};

module.exports.add=function(modal){
  return (req,res,next)=>{
    let newItem =req.body;
    newItem.id=mockjs.mock('@id');
    modal.list.push(newItem);
    modal.total++;
    res.status(200).json({
      data:newItem,
      total:modal.total,
      code:'200'
    });
  };
};

module.exports.update=function (modal) {
  return (req,res,next)=>{
    let id =req.params.id;
    let updateItem =req.body;
    let currentItem=modal.list.find(item=>{
      return item.id==id;
    });
    console.log(currentItem);
    for(let key in updateItem){
      currentItem[key]=updateItem[key];
    }
    res.status(200).json({
      data:currentItem,
      code:'200'
    });
  };
};

module.exports.remove=function (modal) {
  return (req,res,next)=>{
    let id =req.params.id;
    modal.list.filter(item=>{
      return item.id!=id;
    });
    modal.total--;
    console.log(modal.total);
    res.status(200).json({
      code:'200',
      message:'删除成功'
    });
  };
};
