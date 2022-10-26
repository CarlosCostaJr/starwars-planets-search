const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';

const getPlanets = async () => {
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  return responseJson;
};

export default getPlanets;
