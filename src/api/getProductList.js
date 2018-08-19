import { _get } from './index'

export const getProductList = (data, offset, limit, id) => {
  let req = {
    url: '/admin/product/' + offset + '/' + limit + '/' +id
  };
  req.data = data;
  return _get(req);
}
