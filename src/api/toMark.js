/*收藏*/
import { _post } from './index'

export const toMark = (data, id) => {
  let req = {
    url: 'v1/mark' + id
  };
  req.data = data;
  return _post(req);
}
