/**
 * CreateDate 2017/02/24
 * Author 张矗
 * Description
 */

const router =require('express').Router();
const qs = require('qs');
const mockjs = require('mockjs');
const dataService=require('./dataService');

const modal=mockjs.mock({
  'list|100': [{
    'id':'@id',
    'name': '@cname',
    'sex':/男|女/,
    'province':'@province',
    'city':'@city',
    'email':'@email'
  }],
  total:100
});

router.get('/',dataService.query(modal));

router.post('/',dataService.add(modal));

router.put('/:id',dataService.update(modal));

router.delete('/:id',dataService.remove(modal));

module.exports=router;
