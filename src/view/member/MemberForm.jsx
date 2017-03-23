import React from 'react';
import {Form, Input } from 'antd';

function MemberForm({currentItem,form}){
  const {getFieldDecorator}=form;
  const FormItem = Form.Item;

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <Form horizontal style={{maxHeight:'400px',overflow:'auto'}}>
      <FormItem
        label="姓名"
        {...formItemLayout}>
        {
          getFieldDecorator('name', {
            initialValue:currentItem.name,
            validateTrigger:'onBlur',
            rules:[
              {
                required:true,
                message:'姓名不能为空'
              },
              {
                min:2,
                max:20,
                message:'姓名长度限定2~20个字符'
              }
            ]
          })
          (
            <Input placeholder="姓名"/>
          )
        }
      </FormItem>
      <FormItem
        label="性别"
        {...formItemLayout}>
        {
          getFieldDecorator('sex', {
            initialValue:currentItem.sex,
            validateTrigger:'onBlur',
            rules:[
              {
                pattern:/^[男|女]$/,
                message:'性别只能为男或女'
              }
            ]
          })
          (
            <Input placeholder="性别"/>
          )
        }
      </FormItem>
      <FormItem
        label="省份"
        {...formItemLayout}>
        {
          getFieldDecorator('province', {
            initialValue:currentItem.province,
            validateTrigger:'onBlur',
            rules:[
              {
                required:true,
                message:'省份不能为空'
              },
              {
                min:2,
                max:20,
                message:'省份长度限定2~20个字符'
              }
            ]
          })
          (
            <Input placeholder="省份"/>
          )
        }
      </FormItem>
      <FormItem
        label="城市"
        {...formItemLayout}>
        {
          getFieldDecorator('city', {
            initialValue:currentItem.city,
            validateTrigger:'onBlur',
            rules:[
              {
                required:true,
                message:'城市不能为空'
              },
              {
                min:2,
                max:20,
                message:'城市长度限定2~20个字符'
              }
            ]
          })
          (
            <Input placeholder="城市"/>
          )
        }
      </FormItem>
      <FormItem
        label="邮箱"
        {...formItemLayout}>
        {
          getFieldDecorator('email', {
            initialValue:currentItem.email,
            validateTrigger:'onBlur',
            rules:[
              {
                type:'email',
                message:'邮箱格式错误'
              }
            ]
          })
          (
            <Input placeholder="邮箱"/>
          )
        }
      </FormItem>
    </Form>
  );
}

export default MemberForm;
