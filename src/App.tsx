import "./App.css";

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
            <li key={gift}>{gift}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}