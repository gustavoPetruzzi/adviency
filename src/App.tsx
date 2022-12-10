import "./App.css";
import { useRef, useState } from "react";
import CustomListItem from "./components/custom-list-item/Custom-list-item";

const INITIAL_GIFTS: Set<string> = new Set([
  'Medias',
  'Caramelos',
  'Vitel tone'
]);

export const App = () => {
  const [gifts, setGifts] = useState(INITIAL_GIFTS);
  const inputRef = useRef<HTMLInputElement>(null);

  const removeGift = (gift: string) => {
    if (gifts.has(gift)) {
      gifts.delete(gift);
      setGifts(new Set(gifts));
    }
  }

  const addGift = () => {
    if (inputRef.current?.value && !gifts.has(inputRef.current.value)) {
      gifts.add(inputRef.current.value);
      inputRef.current.value = '';
      setGifts(new Set(gifts));
    }
  }

  const removeAll = () => {
    gifts.clear();
    setGifts(new Set(gifts));
  }

  const GiftsList = () => {
    if (gifts.size > 0) {
      return (
        <ul>
          {Array.from(gifts).map(gift => (
            <CustomListItem key={gift}>
              <div className="list-item-container">
                <span> {gift} </span>
                <button className="remove-button" onClick={() => removeGift(gift)}> x </button>
              </div>
            </CustomListItem>
          ))}
        </ul>
      )
    } else {
      return (
        <p>
          No seas Rata y agrega un regalo!
        </p>
      )
    }
  }

  return (
    <section className="main">
      <div  className="gifts">
        <h1> Regalos: </h1>
        <div className="input-container">
          <input ref={inputRef} type="text" placeholder="Agregar regalo" />
          <button className="primary-button" onClick={addGift}> Agregar </button>
        </div>
        <GiftsList />
        <button className="primary-button" onClick={removeAll}> Borrar todo </button>
      </div>
    </section>
  )
}