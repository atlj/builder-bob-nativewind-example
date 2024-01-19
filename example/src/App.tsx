import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { MyCustomButton } from 'react-native-nativewind-example';

export default function App() {
  return (
    <View style={styles.container}>
      <MyCustomButton
        label="Hi mom!"
        onPress={() => {
          console.log('Hi mom!');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
