import { _post } from './index'

export const changeName = (data) => {
  let req = {
    url: 'v1/change_name'
  };
  req.data = data;
  return _post(req);
};
