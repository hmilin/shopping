import { _post } from './index'

export const cancelMark = (data, id) => {
  let req = {
    url: 'v1/cancel_mark' + id
  };
  req.data = data;
  return _post(req);
}
