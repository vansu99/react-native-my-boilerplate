import CustomHeader from '@/components/custom-header';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { COLORS, FONTS, SPACINGS } from '@/themes';
import HomeItem from './components/home-item';
import { useTranslation } from 'react-i18next';
import { changeCurrentLocale } from '@/locales/i18next';
import HomeEmpty from './components/home-empty';
import productApis from '@/apis/product';
import { API_CONFIG } from '@/constants';
import { RequestTypes } from '@/types/http';
import AlertHelper from '@/utils/alert';
import { ProductTypes } from '@/types/product';

function HomeScreen() {
  const { t } = useTranslation();

  // Limit loading, always one API is running
  const isLoading = useRef(false);
  // Prevent load more when it is out of data
  const isStop = useRef(false);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState<Array<ProductTypes>>([]);

  useEffect(() => {
    getData(RequestTypes.refresh, { page });
  }, []);

  const getData = async (type: keyof typeof RequestTypes, args?: any) => {
    // If the function is still loading but still calling the function => return
    if (isLoading.current) return;
    // Out of data => return
    if (type === RequestTypes.loadMore && isStop.current) return;
    if (type === RequestTypes.refresh) {
      setProducts([]);
      isStop.current = false;
    }

    try {
      setFetching(true);
      isLoading.current = true;
      const params = {
        limit: API_CONFIG.LIMIT,
        ...args,
      };

      const response = await productApis.productList(params);

      isLoading.current = false;
      if (response.data.products.length < API_CONFIG.LIMIT) {
        isStop.current = true;
      }

      if (type === RequestTypes.refresh) {
        setProducts(response.data.products);
      }

      if (type === RequestTypes.loadMore) {
        const newData = [...products].concat(response.data.products);
        setProducts(newData);
      }
    } catch (error) {
      AlertHelper.error('Error', 'Something went wrong.');
    } finally {
      setFetching(false);
    }
  };

  const handleLoadMore = async () => {
    if (isStop.current || isLoading.current) {
      return;
    } else {
      const currentPage = page + 1;
      setPage(currentPage);
      const params = {
        page: currentPage,
      };
      await getData(RequestTypes.loadMore, params);
    }
  };

  const handleRefresh = async () => {
    setPage(1);
    await getData(RequestTypes.refresh, { page: 1 });
  };

  const renderItem = (item: ProductTypes) => <HomeItem item={item} />;

  const renderEmptyList = () => <HomeEmpty />;

  const renderSeparator = useCallback(() => <View style={{ height: 10 }} />, []);

  const renderFooterList = useMemo(() => {
    if (fetching) return <ActivityIndicator />;
    if (products.length === 0 && isStop.current) return <HomeEmpty />;
    if (isStop.current) return;
    return <View />;
  }, [fetching]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <CustomHeader
        title="Home"
        isBack={false}
      />
      <View style={styles.container}>
        <Text style={{ color: '#000', textAlign: 'center', paddingVertical: 15 }}>{t('common.hello')}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15 }}>
          <TouchableOpacity>
            <Text
              style={{ color: 'blue' }}
              onPress={() => changeCurrentLocale('en')}
            >
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCurrentLocale('ja')}>
            <Text style={{ color: 'blue' }}>Japan</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
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
          keyExtractor={({ _id }) => `item-${_id}`}
          onEndReachedThreshold={0.1}
          onEndReached={() => handleLoadMore()}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => handleRefresh()}
            />
          }
          ListFooterComponent={<View style={styles.footer}>{renderFooterList}</View>}
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
    width: '100%',
    paddingTop: 15,
    paddingBottom: SPACINGS.TAB_HEIGHT,
  },
  text: {
    fontFamily: FONTS.robotoRegular,
    fontSize: 14,
    color: COLORS.black,
  },
  footer: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
