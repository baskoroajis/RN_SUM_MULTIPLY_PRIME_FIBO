import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SumContentPage from '../sumpage';
import MultiplyContentPage from '../multiplypage';
import NPrimeContentPage from '../nprimepage';
import NFiboContentPage from '../nfibopage';

import HomepageStyle from './Styles';

const Tab = createMaterialTopTabNavigator();

const HomePage = () => {
  const styles = HomepageStyle;
  return (
    <View style={{ flex: 1 }} testId="Homepage">
      <Tab.Navigator
        style={styles.tabBarContainer}
        tabBarOptions={{
          style: styles.tabBarStyle,
          indicatorStyle: styles.tabBarIndicatorStyle
        }}
      >
        <Tab.Screen name="Sum" component={SumContentPage} />
        <Tab.Screen name="Multiply" component={MultiplyContentPage} />
        <Tab.Screen name="N Prime" component={NPrimeContentPage} />
        <Tab.Screen name="N Fibo" component={NFiboContentPage} />
      </Tab.Navigator>
    </View>
  );
  // }
};

export default HomePage;
