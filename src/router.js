import React from 'react';
import {Route,IndexRedirect} from 'dva/router';
import {Router} from 'one-base';
import Member from 'view/member/Member';

//子系统基础路径
let base='member';
//子系统title
let title='用户管理';
//子系统路由表
let dataSource = [
  {
    title: '用户列表',
    path: 'list'
}
];
//进入子系统，首次激活路径
let currentPath='list';

export default function () {
  return (
    <Router base={base} title={title} dataSource={dataSource} currentPath={currentPath}>
      <Route path="/">
        <IndexRedirect to="list"/>
        <Route path="list" component={Member}/>
      </Route>
    </Router>
  );
}
