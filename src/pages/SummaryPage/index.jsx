import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../lib/fetchData';
import LocationSummary from '../../Components/LocationSummary/LocationSummary';
import styles from './SummaryPage.module.scss';

const SummaryPage = () => {
  const [hotelDetails, setHotelDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchData('hotelDetails').then((data) => setHotelDetails(data));
    }, []);

    const selectedHotel = hotelDetails?.find((hotel) => hotel?.id == id);

  return (
    <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    
                    {selectedHotel && (
                        <>
                            <p>otel id : {selectedHotel.id} </p>
                            
                            <LocationSummary 
                                image={selectedHotel.images?.[0]} 
                                locationName={selectedHotel.title} 
                                location={selectedHotel.subtitle} 
                            />
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
