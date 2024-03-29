import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../../components/custom-header';

function AccountScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader title="Account root" isBack={false} />
      <View style={styles.container}>
        <Text style={{ color: 'black' }}>Account screen root</Text>
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

export default AccountScreen;
