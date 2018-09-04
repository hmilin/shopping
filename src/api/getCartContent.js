import { _get } from './index'

export const getCartContent = (data) => {
  let req = {
    url: 'v1/cart_content'
  };
  req.data = data;
  return _get(req);
};
