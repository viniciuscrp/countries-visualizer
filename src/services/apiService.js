const API_URL = 'https://restcountries.eu/rest/v2';

const getAllCountries = async(fields = null) => {
  const response = await fetch(`${API_URL}/all?fields=${fields?.join(';') || ''}`, {method: 'get'});
  if (!response.ok) {
    return undefined;
  }
  const result = await response.json();
  return result;
}

export { getAllCountries };