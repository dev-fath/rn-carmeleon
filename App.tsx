/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ComponentType } from 'react';
import * as Sentry from '@sentry/react-native';
import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainComponent from 'page/Main';
import MenuComponent from 'page/Menu';
import { RootStackParamList } from 'interfaces/navigation';

Sentry.init({
  dsn: 'https://12655d0c152e4b9e9a849a99de3b3bb0@o1243005.ingest.sentry.io/6397948',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const codePushOptions: { [index: string]: unknown } = {
  deploymentKey: '4c364078-1c74-4f24-9820-da19500e830d',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미
  updateDialog: false,
  // 업데이트를 할지 안할지 여부에 대한 노출 (잠수함 패치의 경우 false)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  installMode: codePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppLayout = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'Home'}>
        <RootStack.Screen name="Home" component={MainComponent} options={{ headerShown: false }} />
        <RootStack.Screen name="Menu" component={MenuComponent} initialParams={{ userId: 'user.id' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const App = codePush(codePushOptions)(AppLayout) as ComponentType;
export default Sentry.wrap(App);
