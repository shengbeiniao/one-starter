import React, {PropTypes} from 'react';
import {Table, Popconfirm} from 'antd';

function MemberList({loading, list, total, queryCondition, query, remove, modalOpen}) {

  const renderOperation = (text, row, index) => {
    return (
      <p>
        <a onClick={() => modalOpen('update', list[index])}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => remove(row.id)}>
          <a>删除</a>
        </Popconfirm>
      </p>
    )
  };

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
  }, {
    title: '省份',
    dataIndex: 'province',
    key: 'province'
  }, {
    title: '城市',
    dataIndex: 'city',
    key: 'city'
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: '操作',
    key: 'operation',
    render: renderOperation
  }];

  const onChange = (page, filter, sorter) => {
    query({
      pageNum: page.current
    });
  };

  const pagination = {
    current: Number(queryCondition.pageNum),
    pageSize: Number(queryCondition.pageSize),
    total: total,
    showTotal: total => `总数：${total}`
  };

  return (
    <Table rowKey="id"
           onChange={onChange}
           pagination={pagination}
           columns={columns}
           loading={loading}
           dataSource={list}/>
  );
}

MemberList.propTypes = {};

export default MemberList;
