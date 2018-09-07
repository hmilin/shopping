import { _get } from './index'

export const getAddress = (data) => {
  let req = {
    url: 'v1/get_address'
  };
  req.data = data;
  return _get(req);
};
