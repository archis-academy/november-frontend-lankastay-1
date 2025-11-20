import React, { useEffect, useState } from 'react';
import QuickStats from '../../components/quick-stats-component/quick_stats';
import fetchData from '../../lib/fetchData';

const Playground = () => {
  const [quickIcons, setQuickIcons] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickIcons(data));
  }, []);

  return (
    <div style={{display:"flex"}}>
      {quickIcons.map((item) => {
        return (
          <div key={item.id}>
            <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default Playground;
