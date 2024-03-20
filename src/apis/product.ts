import type { RequestPaginateParams, ResponseData } from '@/types/http';
import http from '@/services/http';
import type { ProductResponse } from '@/types/product';
import { API_CONFIG } from '@/constants';

export enum PRODUCT_URL {
  URL_PRODUCT_LIST = '/products',
}

const productApis = {
  productList: ({
    limit = API_CONFIG.LIMIT,
    page = 1,
  }: RequestPaginateParams): Promise<ResponseData<'products', ProductResponse>> =>
    http.get(`${PRODUCT_URL.URL_PRODUCT_LIST}?page=${page}&limit=${limit}`),
};

export default productApis;
