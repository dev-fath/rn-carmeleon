import React, { Dispatch, SetStateAction } from 'react';

import { Alert, Modal, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';
import { ColorTheme } from '../../../assets/colorCodes';

interface LoginCheckModalPropsInterface {
  modalProps: {
    visible: boolean;
    transparent: boolean;
    animationType: 'none' | 'slide' | 'fade' | undefined;
    onModalClose: () => void;
  };
  onPressCancel: () => void;
  onPressLogin: () => void;
}

const LoginCheckModal = (props: { modalVisible: boolean; setModalVisible: Dispatch<SetStateAction<boolean>> }) => {
  const navigate: DefaultScreenNavigationProp = useNavigation();
  const loginCheckModalProps: LoginCheckModalPropsInterface = {
    modalProps: {
      visible: props.modalVisible,
      transparent: true,
      animationType: 'slide',
      onModalClose: () => {
        Alert.alert('Modal has been closed.');
        props.setModalVisible(!props.modalVisible);
      },
    },
    onPressCancel: () => props.setModalVisible(!props.modalVisible),
    onPressLogin: () => {
      props.setModalVisible(!props.modalVisible);
      navigate.navigate('Login');
    },
  };
  return <LoginCheckModalVAComponent {...loginCheckModalProps} />;
};

const LoginCheckModalVAComponent = (props: LoginCheckModalPropsInterface) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
      }}
    >
      <Modal style={{ height: '50%', width: '50%', backgroundColor: '#d00' }} {...props.modalProps}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: '600' }}>비 로그인 유저</Text>
            </View>
            <View style={{ marginBottom: 16 }}>
              <Text>로그인이 필요합니다</Text>
              <Text>로그인 하시겠습니까?</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Pressable
                style={{
                  marginRight: 8,
                  backgroundColor: '#ccc',
                  width: 100,
                  height: 40,
                  borderRadius: 20,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={props.onPressCancel}
              >
                <Text>취소</Text>
              </Pressable>
              <Pressable
                style={{
                  marginRight: 8,
                  backgroundColor: ColorTheme.Main,
                  width: 100,
                  height: 40,
                  borderRadius: 20,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={props.onPressLogin}
              >
                <Text style={{ color: ColorTheme.white }}>로그인하기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginCheckModal;
