import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {View, Button} from 'react-native';
import React from 'react';

function AnimatedStyleUpdateExample(props) {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'black', margin: 30},
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
}

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={AnimatedStyleUpdateExample} />
        <Drawer.Screen name="Article" component={AnimatedStyleUpdateExample} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
