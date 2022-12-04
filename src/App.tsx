import "./App.css";
import CustomListItem from "./components/custom-list-item/Custom-list-item";

export const App = () => {
  const gifts: string[] = [
    'Medias',
    'Caramelos',
    'Vitel tone'
  ]
  return (
    <section className="main">
      <div  className="gifts">
        <h1> Regalos: </h1>
        <ul>
          {gifts.map(gift => (
            <CustomListItem key={gift}>{gift}</CustomListItem>
          ))}
        </ul>
      </div>
    </section>
  )
}