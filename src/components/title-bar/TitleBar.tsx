import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { carmeleonState } from '../../redux/store';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';
import { useNavigation } from '@react-navigation/native';
import { TitleBarViewPropsInterface } from './title-bar.interface';
import TitleBarVAComponent from './TitleBar.view';

const TitleBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const isAuthenticated = useSelector((state: carmeleonState) => state.isAuthenticated);
  const navigation: DefaultScreenNavigationProp = useNavigation();

  const TitleBarViewProps: TitleBarViewPropsInterface = {
    modalVisible,
    setModalVisible,
    isAuthenticated,
    onPress: () => {
      isAuthenticated ? navigation.navigate('AutoPay') : setModalVisible(!modalVisible);
    },
  };
  return <TitleBarVAComponent {...TitleBarViewProps} />;
};
export default TitleBar;
