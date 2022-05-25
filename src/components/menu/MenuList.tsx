import React from 'react';

import { View } from 'react-native';
import MenuItem from './MenuItem';
import { MenuItemInterface } from '../../interfaces/menuItem';

const MenuList = () => {
  const menuList: MenuItemInterface[] = [
    { icon: '아이콘', name: 'Payment', title: '결제관리' },
    { icon: '아이콘', name: 'Car', title: '차량관리' },
    { icon: '아이콘', name: 'History', title: '이용내역' },
    { icon: '아이콘', name: 'Reviews', title: '리뷰관리' },
    { icon: '아이콘', name: 'Event', title: '이벤트' },
    { icon: '아이콘', name: 'Favorites', title: '즐겨찾기' },
    { icon: '아이콘', name: 'Questions', title: '문의하기' },
    { icon: '아이콘', name: 'Notice', title: '공지사항' },
    { icon: '아이콘', name: 'Settings', title: '설정' },
    { icon: '아이콘', name: 'Qrla', title: '큐알라' },
  ];
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
        return <MenuItem key={menu.name} {...menu} />;
      })}
    </View>
  );
};

export default MenuList;
