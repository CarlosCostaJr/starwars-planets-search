const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';

const getPlanets = async () => {
  const { results } = await fetch(endpoint).then((resp) => resp.json());
  return results;
};

export default getPlanets;
