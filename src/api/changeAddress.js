import { _post } from './index'

export const changeAddress = (data) => {
  let req = {
    url: 'v1/change_address'
  };
  req.data = data;
  return _post(req);
};
