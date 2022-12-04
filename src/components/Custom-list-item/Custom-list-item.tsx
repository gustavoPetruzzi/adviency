import "./Custom-list-item.css";
import giftLogo from '../../assets/icons/giftbox.png';

const CustomListItem: React.FC<{children: string}> = ({children}) => {
  return (
    <li className="custom-list-item">
      <span>
        <img src={giftLogo} alt="gift Logo" />
      </span>
      {children}
    </li>
  )
}

export default CustomListItem;