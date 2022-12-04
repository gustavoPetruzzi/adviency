import CustomListItem from "./components/Custom-list-item/Custom-list-item"
import "./App.css";
import { useRef, useState } from "react";
const INITIAL_GIFTS: string[] = [
  'Medias',
  'Caramelos',
  'Vitel tone'
];
export const App = () => {
  const [gifts, setGifts] = useState(INITIAL_GIFTS);
  const inputRef = useRef<HTMLInputElement>(null);
  const addGift = () => {
    const value = inputRef.current?.value;
    if (value) {
      gifts.push(value);
      setGifts([...gifts]);
      inputRef.current.value = '';
    }
    console.log(gifts);
  };

  return (
    <section className="container">
      <div className="gifts">
        <h1> Regalos </h1>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            id="gift"
            name="gift"
          />
          <button onClick={addGift}> Agregar </button>
        </div>
        <ul>
          {gifts.map(gift => (
            <CustomListItem key={gift}>{gift}</CustomListItem>
          ))}
        </ul>
      </div>
    </section>
  )
}