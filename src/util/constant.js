/**
 * CreateDate 2016/12/23
 * Author 张矗
 * Description
 */

'use strict';

export default {
  serviceTypeList:[{
    value:0,
    name:'短信'
  },{
    value:1,
    name:'语音'
  },{
    value:2,
    name:'邮箱'
  }],
  channelTypeList:[{
    value:0,
    name:'系统'
  },{
    value:1,
    name:'通知'
  },{
    value:2,
    name:'触发'
  },{
    value:3,
    name:'其他'
  }],
  templateTypeList:[
    {
      value:0,
      name:'普通'
    },
    {
      value:1,
      name:'催收'
    },
    {
      value:2,
      name:'验证码'
    },
  ],
  statusTypeList:[
    {
      value:-1,
      name:'已拦截'
    },
    {
      value:0,
      name:'已提交'
    },
    {
      value:1,
      name:'提交失败'
    },
    {
      value:2,
      name:'发送成功'
    },
    {
      value:3,
      name:'发送失败'
    }
  ]
}
