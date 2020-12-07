import urls from 'config/urls';
import { convertObjectToQueryString } from 'utils/convert-object';

export const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };
};

const request = async (url, options) => {
  let result;
  try {
    result = await fetch(url, {
      headers: getHeaders(),
      ...options,
    });
  } catch (e) {
    console.log(e);
  }
  if (result.status === 401) {
    window.location.replace('/logout');
    // window.history.pushState({}, '', '/logout');
  } else {
    return await result.json();
  }
};

export const post = ({ api, model } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'POST',
    body: JSON.stringify(model),
  });
};

export const get = ({ api, model } = {}) => {
  const query = convertObjectToQueryString(model);
  return request(`${urls.endPointAdmin}${api}${query}`, {
    method: 'GET',
  });
};

export const remove = ({ api, id } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'DELETE',
  });
};

//FIXME: need determine entity id
export const put = ({ api, model } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'PUT',
    body: JSON.stringify(model),
  });
};

//FIXME: need determine entity id
export const patch = ({ api, model } = {}) => {
  return request(`${urls.endPointAdmin}${api}`, {
    method: 'PATCH',
    body: JSON.stringify(model),
  });
};
