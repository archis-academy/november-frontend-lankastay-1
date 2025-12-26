import React from 'react';
import { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData.js';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import QuickStats from '../../Components/quick-stats-component/quick_stats';
import Login from '../../Components/Login/Login.jsx';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb.jsx';
import Header from '../../Components/Header/Header.jsx';
import Amentiti from '../../sections/AmentitiSection/amentiti.jsx';
import FAQ from "../../sections/FAQSection/FAQ.jsx";

const Playground = () => {
  const [quickIcons, setQuickIcons] = useState([]);
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickIcons(data));

    fetchData('hotelDetails').then((data) => {
      setAmenities(data[0]?.amenities);
    });
  }, []);

  return (
    <div>
      <Header />
      <Breadcrumb />
<FAQ />
      <div style={{ display: 'flex' }}>
        {quickIcons.map((item) => {
          return (
            <div key={item.id}>
              <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
            </div>
          );
        })}
      </div>

      {amenities?.length > 0 && <Amentiti data={amenities} />}

      <Login />

      <div></div>
    </div>
  );
  
};
const App = () => {
  return (
    <div className="App">
      <FAQ />
    </div>
  );
};
export default Playground;
