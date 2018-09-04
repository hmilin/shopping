import { _post } from './index'

export const login = (data) => {
  let req = {
    url: 'v1/login'
  };
  req.data = data;
  return _post(req);
}
