import { _post } from './index'

export const placeOrder = (data) => {
  let req = {
    url: 'v1/place_order'
  };
  req.data = data;
  return _post(req);
};
