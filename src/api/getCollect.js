import { _get } from './index'

export const getCollect = (data) => {
  let req = {
    url: 'v1/my_collect'
  };
  req.data = data;
  return _get(req);
};
