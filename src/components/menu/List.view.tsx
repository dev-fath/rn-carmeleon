import { View } from 'react-native';
import Item from './Item';
import LoginCheckModal from '../LoginCheckModal';
import React from 'react';
import { ListViewPropsInterface } from './interfaces';

const ListVAComponent = (props: ListViewPropsInterface) => {
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
      {props.menuList.map(menu => {
        return (
          <Item key={menu.name} {...menu} modalVisible={props.modalVisible} setModalVisible={props.setModalVisible} />
        );
      })}
      <LoginCheckModal modalVisible={props.modalVisible} setModalVisible={props.setModalVisible} />
    </View>
  );
};

export default ListVAComponent;
