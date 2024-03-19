import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../../../themes';
import type { TodoTypes } from '../../../types/todo';

interface HomeListItemProps {
  item: TodoTypes;
}

function HomeListItem({ item }: HomeListItemProps) {
  return (
    <View>
      <Text style={[styles.text, { fontWeight: 'bold', marginBottom: 2 }]}>
        {item?.email}
      </Text>
      <Text numberOfLines={2} style={styles.text}>
        {item?.body}
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
