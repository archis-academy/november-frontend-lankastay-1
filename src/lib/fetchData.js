import axios from 'axios';

async function fetchData(key) {
  const { data } = await axios.get('/db.json');
  return data[key];
}

export default fetchData;