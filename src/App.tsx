// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useRef, useState } from "react";
import "./App.css";
import CustomListItem from "./components/Custom-list-item/Custom-list-item";
import { Gift } from "./models/gift";

const INITIAL_GIFTS: Gift[] = [
  {
    id: 1,
    quantity: 1,
    name: "Medias",
  },
  {
    id: 2,
    quantity: 1,
    name: "Caramelos",
  },
  {
    id: 3,
    quantity: 1,
    name: "Vitel tone",
  }
]
export const App = () => {
  const [gifts, setGifts] = useState<Gift[]>(INITIAL_GIFTS);
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const removeGift = (giftId: number) => {
    const giftIndex = gifts.findIndex(gift => gift.id === giftId);
    const gift = gifts[giftIndex];
    if (gift.quantity > 1) {
      gifts[giftIndex] = { ...gift, quantity: gift.quantity - 1 };
    } else {
      gifts.splice(giftIndex, 1);
    }
    setGifts([...gifts]);
  }

  const addGift = () => {
    const giftIndex = gifts.findIndex(gift => gift.name === nameRef.current?.value);
    const newGifts = [...gifts];
    if (giftIndex > -1) {
      newGifts[giftIndex] = { ...gifts[giftIndex], quantity: gifts[giftIndex].quantity + 1 };
    } else {
      const gift = {
        id: gifts.length + 1,
        name: nameRef.current!.value,
        quantity: parseInt(quantityRef.current?.value || '1')
      
      }
      newGifts.push(gift);
    }
    setGifts([...newGifts]);
    nameRef.current!.value = '';
    quantityRef.current!.value = '1';
  }

  const removeAll = () => {
    setGifts([]);
  }
  return (
    <section className="main">
      <div  className="gifts">
        <h1> Regalos: </h1>
        <div className="input-container">
          <input type="text" placeholder="Regalo" ref={nameRef} />
          <input type="number" placeholder="Cantidad" className="quantity" ref={quantityRef} value={1} min={1} />
          <button className="primary-button" onClick={addGift}> Agregar</button>
        </div>
        <ul>
          {gifts.map(gift => (
            <CustomListItem key={gift.id}>
              <div className="list-item-container">
                <span> {gift.name} x {gift.quantity} </span>
                <button className="remove-button" onClick={() => removeGift(gift.id)}> x </button>
              </div>
            </CustomListItem>
          ))}
        </ul>
        <button className="primary-button" onClick={removeAll}> Borrar todo </button>
      </div>
    </section>
  )
}