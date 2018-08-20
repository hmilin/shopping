import { _get } from './index'

export const classifySearch = (data, keywords) => {
  let req = {
    url: 'admin/classify_search/' + keywords
  };
  req.data = data;
  return _get(req);
};
