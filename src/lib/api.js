import axios from 'axios';

const BASE_URL = "https://696e6cedd7bacd2dd716c020.mockapi.io/api/v1";

const fetchDataFromApi = async (endpoint, id = null) => {
  try {
    // ID gönderilmişse: .../hotels/1 olur
    // ID yoksa: .../hotels olur
    const url = id ? `${BASE_URL}/${endpoint}/${id}` : `${BASE_URL}/${endpoint}`;

    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("API Hatası:", error);
    // İstersen burada boş array dönebilirsin hata patlamasın diye
    return null; 
  }
};

export default fetchDataFromApi;

// Örnek kullanımlar:

// useEffect(() => {
//   // Sadece endpoint ismini veriyorsun
//   fetchDataFromApi('hotels').then((data) => {
//      setHotels(data);
//   });
// }, []);


// const { id } = useParams();

// useEffect(() => {
//   // Hem endpoint hem ID veriyorsun
//   fetchDataFromApi('hotels', id).then((data) => {
//      setHotelDetails(data);
//   });
// }, [id]);