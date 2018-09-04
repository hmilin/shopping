import { _post } from './index'

export const addCart = (data, id) => {
  let req = {
    url: 'v1/add_cart' + id
  };
  req.data = data;
  return _post(req);
}
