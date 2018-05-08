import { request } from '@utils/helpers';
import { API_ACCESS_KEY } from '@utils/constants';

export const getCurrencyListApi = () => request(
  'http://data.fixer.io/api/symbols',
  {
    method: 'GET',
    params: {
      access_key: API_ACCESS_KEY,
    },
    withCredentials: false,
  },
);
