import React, { Dispatch, SetStateAction } from 'react';

import { Alert, Modal, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultScreenNavigationProp } from '../interfaces/navigation';

const LoginCheckModal = (props: { modalVisible: boolean; setModalVisible: Dispatch<SetStateAction<boolean>> }) => {
  const navigate: DefaultScreenNavigationProp = useNavigation();
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View>
          <Text>비 로그인 유저</Text>
        </View>
        <View>
          <Text>로그인이 필요합니다</Text>
          <Text>로그인 하시겠습니까?</Text>
        </View>
        <Pressable onPress={() => props.setModalVisible(!props.modalVisible)}>
          <Text>Hide Modal</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            props.setModalVisible(!props.modalVisible);
            navigate.navigate('Login');
          }}
        >
          <Text>로그인하기</Text>
        </Pressable>
      </Modal>
    </View>
  );
};

export default LoginCheckModal;
