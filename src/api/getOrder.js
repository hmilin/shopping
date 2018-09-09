import { _get } from './index'

export const getOrder = (data) => {
  let req = {
    url: 'v1/get_order'
  };
  req.data = data;
  return _get(req);
};
