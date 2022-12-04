export const App = () => {
  const gifts: string[] = [
    'Medias',
    'Caramelos',
    'Vitel tone'
  ]
  return (
    <>
      <h1> Regalos </h1>
      <ul>
        {gifts.map(gift => (
          <li key={gift}>{gift}</li>
        ))}

      </ul>
    </>
  )
}