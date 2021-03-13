import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/screens/mainmodule/homepage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Okadoc"
          component={HomeScreen}
          options={({ route, navigation }) => ({
            headerTitleAlign: 'center',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0
            },
            route: { route },
            navigation: { navigation }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
