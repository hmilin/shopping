import { _post } from './index'

export const deleteCart = (data) => {
  let req = {
    url: 'v1/delete_cart'
  };
  req.data = data;
  return _post(req);
}
