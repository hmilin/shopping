import { _get } from './index'

export const logout = (data) => {
  let req = {
    url: 'v1/logout'
  };
  req.data = data;
  return _get(req);
};
