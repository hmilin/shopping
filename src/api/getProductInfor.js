import { _get } from './index'

export const getProductInfor = (data, key) => {
  let req = {
    url: 'admin/product_infor/' + key
  };
  req.data = data;
  return _get(req)
};
