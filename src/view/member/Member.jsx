import React, { PropTypes } from 'react';
import { connect } from 'dva';
import {routerRedux} from "dva/router";
import { Button,Row,Col,Form } from 'antd';
import MemberList from './MemberList';
import MemberModal from './MemberModal';
import style from './style.scss';

function Member({ dispatch,memberProps,form,location }) {
  const {loading,list,total,queryCondition,currentItem,modalType,modalVisible}=memberProps;
  const {setFieldsValue}=form;

  const modalOpen=(type,currentItem)=>{
    setFieldsValue(currentItem);
    dispatch({
      type:'member/showModal',
      payload:{
        modalType:type,
        currentItem:currentItem
      }
    });
  };

  const modalClose=()=>{
    dispatch({
      type:'member/hideModal',
      payload:{
        currentItem:{}
      }
    })
  };

  const query=(queryCondition)=>{
    dispatch({
      type:'member/query',
      payload:{
        queryCondition:queryCondition
      }
    });
    //react-router-redux状态管理
    dispatch(routerRedux.push({
      pathname: '/list',
      query:queryCondition,
    }));
  };

  const create=(item)=>{
    dispatch({
      type:'member/create',
      payload:{
        item:item
      }
    });
  };

  const update=(item)=>{
    dispatch({
      type:'member/update',
      payload:{
        modalVisible:true,
        modalType:'update',
        id:currentItem.id,
        updateItem:item
      }
    });
  };

  const remove=(id)=>{
    dispatch({
      type:'member/remove',
      payload:{
        id:id
      }
    });
  };

  const memberListProps={loading,list,total,queryCondition,query,remove,modalOpen,form};
  const memberModalProps={modalType,modalVisible,currentItem,create,update,modalClose,form};

  return (
    <div>
      <Row type="flex" justify="end" className={style.header}>
        <Col><Button type="primary" onClick={()=>modalOpen('create',{})}>新建用户</Button></Col>
      </Row>
      <MemberList {...memberListProps}/>
      <MemberModal {...memberModalProps} />
    </div>
  )
}

Member.propTypes = {
  dispatch: PropTypes.func,
  memberProps: PropTypes.object
};

function mapStateToProps({'member':memberState }) {
  return { memberProps:memberState};
}

export default connect(mapStateToProps)(Form.create()(Member));
