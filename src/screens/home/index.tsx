import { useDispatch, useSelector } from '../../redux/store';
import CustomHeader from '../../components/custom-header';
import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import { TODO_ACTIONS } from '../../constants/actions/todo';
import type { TodoTypes } from '../../types/todo';
import { COLORS, FONTS, SPACINGS } from '../../themes';

function HomeScreen() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.list);

  useEffect(() => {
    dispatch({
      type: TODO_ACTIONS.GET_TODO_LIST,
    });
  }, []);

  const renderItem = useCallback(
    (item: TodoTypes) => (
      <View>
        <Text style={[styles.text, { fontWeight: 'bold', marginBottom: 2 }]}>
          {item.email}
        </Text>
        <Text numberOfLines={2} style={styles.text}>
          {item.body}
        </Text>
      </View>
    ),
    [todos],
  );

  const renderEmptyList = useCallback(
    () => (
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>No data</Text>
      </View>
    ),
    [todos],
  );

  const renderSeparator = useCallback(
    () => <View style={{ height: 10 }} />,
    [],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader title="Home" isBack={false} />
      <View style={styles.container}>
        <FlatList
          data={todos}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          scrollEventThrottle={100}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ListEmptyComponent={renderEmptyList}
          contentInsetAdjustmentBehavior="automatic"
          ItemSeparatorComponent={renderSeparator}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={({ id }) => `item-${id}`}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    height: '100%',
    paddingHorizontal: 15,
  },
  list: {
    paddingTop: 15,
    width: '100%',
    paddingBottom: SPACINGS.TAB_HEIGHT,
  },
  text: {
    fontFamily: FONTS.robotoRegular,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default HomeScreen;
