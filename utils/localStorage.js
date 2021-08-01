export function parseJSONFromLocalStorage(key, defaultValue) {
  const json = JSON.parse(localStorage.getItem(key));

  if (!json) {
    return defaultValue;
  }

  return json;
}

export function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
