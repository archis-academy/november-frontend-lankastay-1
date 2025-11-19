import React, { useEffect, useState } from 'react';
import QuickStats, {
  CameraIcon,
  TravellerIcon,
  LocationIcon,
} from '../../components/quick-stats-component/quick_stats';
import fetchData from '../../lib/fetchData';

const ICONS = {
  camera: CameraIcon,
  traveller: TravellerIcon,
  location: LocationIcon,
};

const Playground = () => {
  const [quickIcons, setQuickIcons] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickIcons(data));
  }, []);

  return (
    <div style={{display:"flex"}}>
      {quickIcons.map((item) => {
        const Icon = ICONS[item.iconKey] ; // db.json'da iconKey yoksa hep CameraIcon gelir

        return (
          <div key={item.id}>
            <QuickStats number={item.number} content={item.content} Icon={Icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Playground;
