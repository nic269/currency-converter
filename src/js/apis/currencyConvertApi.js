import { request } from '@utils/helpers';
import { API_ACCESS_KEY } from '@utils/constants';

export const currencyConvertApi = ({ from, to, amount }) => request(
  'http://data.fixer.io/api/convert',
  {
    method: 'GET',
    withCredentials: false,
    params: {
      access_key: API_ACCESS_KEY,
      from,
      to,
      amount
    },
  },
);
