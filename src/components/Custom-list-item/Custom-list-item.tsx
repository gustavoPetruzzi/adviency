import './Custom-list-item.css';
import giftLogo from '../../assets/icons/giftbox.png';

const CustomListItem: React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <li className="list-item">
      <span>
        <img src={giftLogo} alt="gift" />
      </span>
      {children}
    </li>
  )
}

export default CustomListItem;