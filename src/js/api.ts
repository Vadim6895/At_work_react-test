import { dynamicKeysObject } from './types';

const URL = 'https://jsonplaceholder.typicode.com/users/';

const api = async (
  url = '',
  { body = null, headers = {}, ...customConfig } = {},
) => {
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const config: dynamicKeysObject = {
    method: body ? 'POST' : 'GET',
    body,
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  if (body) config.body = JSON.stringify(body);

  try {
    const response = await fetch(url, config);
    if (response.ok) {
      const data = await response.json();
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    const errorMessage = await response.json();
    throw new Error(`${errorMessage.error} ${errorMessage.statusCode}`);
  } catch (err) {
    return Promise.reject(err);
  }
};

api.getUsers = function films() {
  return api(URL);
};

api.getUser = function films(id: string | undefined) {
  return api(`${URL}${id}`);
};

export default api;
