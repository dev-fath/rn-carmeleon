import React, { useState } from 'react';

import { View } from 'react-native';
import MenuItem from './MenuItem';
import { MenuItemInterface } from '../../interfaces/menuItem';
import LoginCheckModal from '../LoginCheckModal';

const MenuList = () => {
  const menuList: MenuItemInterface[] = [
    { icon: '아이콘', name: 'Payment', title: '결제관리', needAuth: true },
    { icon: '아이콘', name: 'Car', title: '차량관리', needAuth: true },
    { icon: '아이콘', name: 'History', title: '이용내역', needAuth: true },
    { icon: '아이콘', name: 'Reviews', title: '리뷰관리', needAuth: true },
    { icon: '아이콘', name: 'Event', title: '이벤트', needAuth: false },
    { icon: '아이콘', name: 'Favorites', title: '즐겨찾기', needAuth: true },
    { icon: '아이콘', name: 'Questions', title: '문의하기', needAuth: false },
    { icon: '아이콘', name: 'Notice', title: '공지사항', needAuth: false },
    { icon: '아이콘', name: 'Settings', title: '설정', needAuth: false },
    { icon: '아이콘', name: 'Qrla', title: '큐알라', needAuth: true },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 16,
      }}
    >
      {menuList.map(menu => {
        return <MenuItem key={menu.name} {...menu} modalVisible={modalVisible} setModalVisible={setModalVisible} />;
      })}
      <LoginCheckModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default MenuList;
