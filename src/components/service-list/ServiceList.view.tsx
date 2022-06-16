import { ServiceItemInterface } from '../../interfaces/serviceItem';
import { SafeAreaView, View } from 'react-native';
import Chip from '../chip/Chip';
import React from 'react';

const ServiceListVAComponent = (props: { serviceList: ServiceItemInterface[] }) => {
  return (
    <SafeAreaView style={{ position: 'absolute', marginTop: 72, zIndex: 1 }}>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 16 }}>
        {props.serviceList.map(service => (
          <Chip key={service.title} {...service} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ServiceListVAComponent;
