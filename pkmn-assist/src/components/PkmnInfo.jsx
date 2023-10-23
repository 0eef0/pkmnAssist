import React, {useEffect, useState} from 'react';
const PkmnInfo = ({currPkmn}) => {
    const [pkmn, setPkmn] = useState([]);
    const getPkmn = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currPkmn}/`);
        const pkmn = await response.json();
        setPkmn(pkmn);
    }
    useEffect(() => {
        getPkmn()
        .then(console.log(pkmn))
        .catch((err) => {
          console.log(err);
        })
      },[currPkmn])

    return (
        <>
        {console.log(typeof pkmn.types)}
            <h1>{pkmn.name}</h1>
        </>
    )
}

export default PkmnInfo;