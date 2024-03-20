import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../../../themes';
import type { ProductTypes } from '@/types/product';

interface HomeListItemProps {
  item: ProductTypes;
}

function HomeListItem({ item }: HomeListItemProps) {
  return (
    <View>
      <Text
        numberOfLines={1}
        style={[styles.text, { fontWeight: 'bold', marginBottom: 2 }]}
      >
        {item?.name}
      </Text>
      <Text
        numberOfLines={2}
        style={styles.text}
      >
        {item?.price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.robotoRegular,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default React.memo(HomeListItem);
