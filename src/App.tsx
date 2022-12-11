import { useState, useRef, useEffect } from "react";
import "./App.css";
import CustomListItem from "./components/Custom-list-item/Custom-list-item";
import { Gift } from "./models/Gift";

export const App = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const giftsFromLocalStorage = localStorage.getItem('gifts');
    if (giftsFromLocalStorage) {
      setGifts(JSON.parse(giftsFromLocalStorage));
    }
  }, []);


  useEffect(() => {
    window.addEventListener('beforeunload', (e) => {
      localStorage.setItem('gifts', JSON.stringify(gifts));
      e.preventDefault();
    });

  }, [gifts])

  const removeGift = (id: number) => {
    const giftIndex = gifts.findIndex(gift => gift.id === id);
    const updatedGifts = [...gifts];
    if (gifts[giftIndex].quantity > 1) {
      updatedGifts[giftIndex].quantity--;
    } else {
      updatedGifts.splice(giftIndex, 1);
    }
    setGifts(updatedGifts);
  }

  const removeAll = () => {
    setGifts([]);
  }

  const addGift = () => {
    if (nameRef.current && quantityRef.current) {
      const giftName = nameRef.current.value;
      const giftQuantity = quantityRef.current.value;
      if (giftName && giftQuantity) {
        const giftIndex = gifts.findIndex(gift => gift.name === giftName);
        if (giftIndex !== -1) {
          const updatedGifts = [...gifts];
          updatedGifts[giftIndex].quantity += parseInt(giftQuantity);
          setGifts(updatedGifts);
        } else {
          const newGift: Gift = {
            id: Math.random(),
            name: giftName,
            quantity: parseInt(giftQuantity)
          }
          setGifts([...gifts, newGift]);
        }
        nameRef.current.value = '';
        quantityRef.current.value = '';
      }
    }  
  }

  return (
    <section className="main">
      <div  className="gifts">
        <h1> Regalos: </h1>
        <div className="input-container">
          <input type="text" placeholder="Nombre" ref={nameRef} />
          <input type="number" placeholder="Cantidad" ref={quantityRef} min={1} defaultValue={1}  />
          <button className="primary-button" onClick={addGift}> Agregar </button>
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
        <button className="primary-button" onClick={removeAll}> Borrar Todo </button>
      </div>
    </section>
  )
}