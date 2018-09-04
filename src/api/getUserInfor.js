import { _get } from './index'

export const getUserInfor = (data) => {
  let req = {
    url: 'v1/user_infor'
  };
  req.data = data;
  return _get(req);
};
