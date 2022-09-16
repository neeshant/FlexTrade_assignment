
import { Card  } from 'antd';
import { HeartFilled ,DeleteOutlined,EditOutlined,MailOutlined,PhoneOutlined,GlobalOutlined ,HeartOutlined  } from '@ant-design/icons';
import { Modal,Form,Input,Button } from 'antd';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../redux/actions/ProductAction';
import { editProduct } from '../redux/actions/ProductAction';

export default function Users({ id, name, email, phone, website }) {
  const dispatch = useDispatch();
  function DeleteProd(id) {
    dispatch(removeProduct(id));
  }
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(0);
  
  const showModal = () => {
      
      setIsModalOpen(true);
  };
  
  const handleOk = (values) => {
    
      setIsModalOpen(false);
  };

  const handleCancel = () => {
      setIsModalOpen(false);
  };
  
  const onFinish = (values) => {
    dispatch(editProduct(id, values.username));
  };
    
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  

  return (
    <div  key={id}>
      <>
            
      <Modal title="Name Changer" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form onSubmit={handleOk} name="basic" labelCol={{span: 5,}} wrapperCol={{span: 16,}} initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed}autoComplete="off" >
          <Form.Item key={1}
            label="Name"
              name="username"
              
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
              <Input />

            </Form.Item>
            <Form.Item style={{marginLeft:'130px'}}><Button type="primary"  htmlType='submit' onClick={handleOk} block>Submit</Button></Form.Item>
          </Form>
          
      </Modal>
    </>
      <Card style={{ margin: 15 }} cover={
        <div style={{  alignItems: 'center' }} >
          <img style={{ background: '#F5F5F5', minWidth:'100%', width: 200, height: 200 }} src={`https://avatars.dicebear.com/v2/avataaars/{{${id}}}.svg?options[mood][]=happy`} alt="" ></img>
        </div>
      }
      actions={[
        <button style={{ border: 'none', background: 'none' ,cursor:'pointer'}}>
          {liked === 0 ? (
                    <HeartOutlined onClick={() => setLiked(1)} style={{ color: "red", fontSize: 20, }} />
                ) : liked === 1 ? (
                  <HeartFilled onClick={() => setLiked(0)} style={{ color: "red", fontSize: 20, }} />
                ) : null}
        </button>,
        <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          
          <EditOutlined onClick={showModal}  style={{fontSize:20,}}/>
        </button>,
         <button style={{ border: 'none', background: 'none',cursor:'pointer' }}>
          
         <DeleteOutlined  onClick={()=>DeleteProd(id)}  style={{fontSize:20,}}/>
       </button>
      ] }>
      <h3>{name}</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MailOutlined style={{ fontSize: 20 }} />
        <p style={{ marginLeft: 10 }}>{email}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <PhoneOutlined style={{ fontSize: 20 }} />
        <p style={{ marginLeft: 10 }}>{phone}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <GlobalOutlined style={{ fontSize: 20 }} />
        <p style={{ marginLeft: 10 }}>{website}</p>
      </div>
      </Card>
  
  </div>
  )
    
  }