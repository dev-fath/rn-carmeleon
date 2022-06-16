import React, { useState } from 'react';

import { MenuItemInterface } from '../../interfaces/menuItem';
import { ListViewPropsInterface } from './interfaces';
import ListVAComponent from './List.view';

const List = () => {
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

  const listViewProps: ListViewPropsInterface = {
    menuList,
    modalVisible,
    setModalVisible,
  };
  return <ListVAComponent {...listViewProps} />;
};
export default List;
