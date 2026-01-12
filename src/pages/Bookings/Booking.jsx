import SearchFilterBarDashboard from '../../Components/SearchFilterBarDashboard/SearchFilterBarDashboard';
import style from './Booking.module.scss';

const Booking = () => {
  return (
    <div className={style.bookingContainer}>
      <SearchFilterBarDashboard />
    </div>
  );
};

export default Booking;
