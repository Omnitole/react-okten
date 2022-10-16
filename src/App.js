import './App.css';
import Simpson from "./simpons_character/Simpson";
import RickAndMorty from "./RickandMorthy/RickAndMorty";

function App() {
  return (
    <div>
    <Simpson
        name = {'Bart'}
        desc = {'Little bratty child'}
        picture = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
    />;
    <Simpson
        name = {'Lisa'}
        desc = {'Nerdy little girl'}
        picture = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
    />
      <RickAndMorty
          name={'Rick Sanchez'}
          status={'Alive'}
          species={'Human'}
          gender={'Male'}
          image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
      />
    </div>
  );
}

export default App;
