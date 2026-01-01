import Button from '../Button/Button';
import style from './Dropdown.module.scss';
const Dropdown = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <select>
          <option value='month'>This Month</option>
        </select>

        <select>
          <option value='booking'>Booking</option>
        </select>
        <Button text='+' />
      </div>
    </div>
  );
};

export default Dropdown;
