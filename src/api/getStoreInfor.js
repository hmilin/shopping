import { _get } from './index'

export const getStoreInfor = (data, key) => {
  let req = {
    url: 'admin/store_infor/' + key
  };
  req.data = data;
  return _get(req);
};
