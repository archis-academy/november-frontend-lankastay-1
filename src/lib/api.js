import axios from 'axios';

const BASE_URL = "https://696e6cedd7bacd2dd716c020.mockapi.io/api/v1";

export const fetchDataFromApi = async (endpoint, id = null) => {
  try {
    const url = id ? `${BASE_URL}/${endpoint}/${id}` : `${BASE_URL}/${endpoint}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("GET Hatası:", error);
    return null;
  }
};

// 2. POST İsteği (Veri Ekleme)
export const postDataToApi = async (endpoint, newData) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    
    // axios.post iki parametre alır: 
    // 1. Adres
    // 2. Gönderilecek Veri (newData)
    const { data } = await axios.post(url, newData);
    return data;
  } catch (error) {
    console.error("POST Hatası:", error);
    return null;
  }
};

// 3. DELETE İsteği (Veri Silme) - Bonus olsun :)
export const deleteDataFromApi = async (endpoint, id) => {
  try {
    const url = `${BASE_URL}/${endpoint}/${id}`;
    const { data } = await axios.delete(url);
    return data;
  } catch (error) {
    console.error("DELETE Hatası:", error);
    return null;
  }
};

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