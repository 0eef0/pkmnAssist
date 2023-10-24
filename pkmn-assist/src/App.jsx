import React, {useEffect, useState} from 'react';
import PkmnInfo from './components/PkmnInfo';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=2000';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pkmn, setPkmn] = useState([]);
  const [currPkmn, setCurrPkmn] = useState(1);
  const getPkmn = async () => {
    const response = await fetch(url);
    const pkmn = await response.json();
    setPkmn(pkmn.results);
  }

  useEffect(() => {
    getPkmn()
    .then(setIsLoading(false))
    //.then(console.log(pkmn))
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="App">
      <select name="pkmn" id="pkmn" onChange={evt => { setCurrPkmn(evt.target.value) }}>
        {
          pkmn.map((pkmn, i) => {
            return <option value={i + 1} key={pkmn.name}>{pkmn.name}</option>
          })
        }
      </select>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currPkmn}.png`} alt={currPkmn} />

        <PkmnInfo currPkmn={currPkmn} />

    </div>
  );
}

export default App;
