const setUrlParameter = (obj) => {
  let query = {};
  for (let [key, value] of Object.entries(obj)) {
    if (value !== '') {
      query[key] = value.toString();
    }
  }
  return setUrl(query);
};

const setUrl = (queries) => {
  if (Object.keys(queries).length > 0) {
    return Object.keys(queries)
      .reduce((result, key) => {
        return [...result, `${key}={"eq":"${queries[key]}"}`];
      }, '')
      .join(',');
  } else {
    return '';
  }
};

export default setUrlParameter;
