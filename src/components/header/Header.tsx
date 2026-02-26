import React from 'react';
import { Layout, Menu, Button, Space, Avatar, Typography } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import {Link, NavLink} from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
  // Меню элементтери
  const menuItems = [
    { key: '1', label: <NavLink to="/">Башкы бет</NavLink> },
    { key: '2', label: <NavLink to="/services">Кызматтар</NavLink>},
    { key: '3', label: <NavLink to="/about">Биз жөнүндө</NavLink> },
    { key: '4', label: <NavLink to="/contact">Байланыш</NavLink> },
  ];

  return (
    <Header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: '0 20px',
      boxShadow: '0 2px 8px #f0f1f2'
    }}>
      {/* Логотип бөлүгү */}
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          width: 40, height: 40, background: '#1890ff', borderRadius: '8px', marginRight: '10px'
        }} />
        <Text strong style={{ fontSize: '18px' }}>NETFLIX</Text>
      </div>

      {/* Меню (Ортодо) */}
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={ menuItems }
        style={{ flex: 1, minWidth: 0, justifyContent: 'center', borderBottom: 'none' }}
      />

      {/* Оң жактагы баскычтар жана Профиль */}
      <Space size="middle">
        <Button type="text">Кирүү</Button>
        <Button type="primary">Катталуу</Button>
        <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
      </Space>
    </Header>
  );
};

export default AppHeader;