import './app.css';

function App() {
  return (
    <>
      <h1>Hello</h1>
      {names && <h1>Hello~! {names}</h1>}
      {['🦼', '🛴'].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
