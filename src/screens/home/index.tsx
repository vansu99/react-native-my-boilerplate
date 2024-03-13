import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={{ color: 'black' }}>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default HomeScreen;
