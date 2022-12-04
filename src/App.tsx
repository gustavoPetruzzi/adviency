import { useRef, useState } from 'react';
import './App.css';
import CustomListItem from './components/custom-list-item/Custom-list-item';

const INITIAL_GIFTS: string[] = [
  'Medias',
  'Caramelos',
  'Vitel tone'
];
export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [giftList, setGiftList] = useState<string[]>(INITIAL_GIFTS);

  const addGift = () => {
    const gift = inputRef.current?.value;
    if (gift) {
      setGiftList([...giftList, gift]);
      inputRef.current.value = '';
    }
  };
  const removeGift = (gift: string) => {
    const newGiftList = giftList.filter((g) => g !== gift);
    setGiftList(newGiftList);
  }
  return (
    <section className="main">
      <div className="gifts">
        <h1> Regalos </h1>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Agregar regalo"
          />
          <button onClick={addGift}> Agregar </button>
        </div>
        <ul>
          {giftList.map(gift => (
            <CustomListItem key={gift}>
              <div className="list-item-container">
                <span> {gift} </span>
                <button className="remove-button" onClick={() => removeGift(gift)}> x </button>
              </div>
            </CustomListItem>
          ))}

        </ul>
      </div>
    </section>
  )
}