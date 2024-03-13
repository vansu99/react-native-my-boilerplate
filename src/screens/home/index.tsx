import CustomHeader from '../../components/custom-header';
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader title="Home" />
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default HomeScreen;
