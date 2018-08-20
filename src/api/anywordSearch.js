import { _get } from './index'

export const anywordSearch = (data, keywords) => {
  let req = {
    url: 'admin/search_anyword/' + keywords
  };
  req.data = data;
  return _get(req);
}
