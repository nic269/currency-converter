import { request } from '@utils/helpers';
import { API_KEY } from '@utils/constants';

export const getCurrencyListApi = () => request(
  'http://data.fixer.io/api/latest',
  {
    method: 'GET',
    params: {
      access_key: API_KEY,
    },
    withCredentials: false,
  },
);
