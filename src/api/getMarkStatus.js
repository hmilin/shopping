import { _get } from './index'

export const getMarkStatus = (data, id) => {
  let req = {
    url: 'v1/is_mark'+id
  };
  req.data = data;
  return _get(req);
};
