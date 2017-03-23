/**
 * CreateDate 2017/01/20
 * Author 张矗
 * Description
 */

'use strict';

const privileges=[
  {
    name:'短信网关',
    key:'sms',
    url:'/admin/sms',
    parent:'admin'
  },
  {
    name:'服务商',
    key:'provider',
    url:'/admin/sms/provider',
    parent:'sms'
  }
];
