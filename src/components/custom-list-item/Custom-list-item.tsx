import giftIcon from '../../assets/icons/giftbox.png';
import "./Custom-list-item.css";
const CustomListItem: React.FC<{children: string}> = ({children}) => {
  return (
    <li className='custom-list-item'>
      <span> <img src={giftIcon} alt="gift" /></span>
      { children }
    </li>
  )
};

export default CustomListItem;

