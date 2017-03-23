import React from 'react';
import { Modal,Form } from 'antd';
import MemberForm from './MemberForm';

function MemberModal({modalType,modalVisible,currentItem,create,update,modalClose,form}){
  const {validateFields,resetFields,setFieldsValue}=form;
  const onOK=()=>{
    validateFields((err,item)=>{
      if(err){
        return;
      }
      if(modalType==='create'){
        create(item);
      }else{
        update(item);
      }
    });
  };

  const onCancel=()=>{
    modalClose();
    resetFields();
  };

  const memberModalProps = {
    title:modalType==='create'?'新增通道':'编辑通道',
    visible:modalVisible,
    onOk: onOK,
    onCancel:onCancel,
  };

  const memberFormProps={currentItem,form};

  return (
    <Modal {...memberModalProps}>
      <MemberForm {...memberFormProps}/>
    </Modal>
  );
}

export default MemberModal;
