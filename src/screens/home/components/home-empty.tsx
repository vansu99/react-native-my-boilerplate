import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONTS, COLORS } from '@/themes';
import { useTranslation } from 'react-i18next';

function HomeEmptyList() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('common.no_data')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.robotoRegular,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default React.memo(HomeEmptyList);
