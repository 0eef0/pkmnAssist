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

    const orderedTypes = [
        'normal',
        'fighting',
        'flying',
        'poison',
        'ground',
        'rock',
        'bug',
        'ghost',
        'steel',
        'fire',
        'water',
        'grass',
        'electric',
        'psychic',
        'ice',
        'dragon',
        'dark',
        'fairy'
    ]
    const typeLookup = [
        {
            weak: ['fighting'],
            immune: ['ghost']
        },
        {
            weak: ['flying', 'psychic', 'fairy'],
            resist: ['bug', 'rock', 'dark']
        },
        {
            weak: ['electric', 'ice', 'rock'],
            resist: ['grass', 'fighting', 'bug'],
            immune: ['ground']
        },
        {
            weak: ['ground', 'psychic'],
            resist: ['grass', 'fighting', 'poison', 'bug', 'fairy']
        },
        {
            weak: ['water', 'grass', 'ice'],
            resist: ['poison', 'rock'],
            immune: ['electric']
        },
        {
            weak: ['water', 'grass', 'fighting', 'ground', 'steel'],
            resist: ['normal', 'fire', 'poison', 'flying']
        },
        {
            weak: ['fire', 'flying', 'rock'],
            resist: ['grass', 'fighting', 'ground']
        },
        {
            weak: ['ghost', 'dark'],
            resist: ['poison', 'bug'],
            immune: ['normal', 'fighting']
        },
        {
            weak: ['fire', 'fighting', 'ground'],
            resist: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'],
            immune: ['poison']
        },
        {
            weak: ['water', 'ground', 'rock'],
            resist: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy']
        },
        {
            weak: ['grass', 'electric'],
            resist: ['fire', 'water', 'ice', 'steel']
        },
        {
            weak: ['fire', 'ice', 'poison', 'flying', 'bug'],
            resist: ['water', 'grass', 'electric', 'ground']
        },
        {
            weak: ['ground'],
            resist: ['electric', 'flying', 'steel']
        },
        {
            weak: ['bug', 'ghost', 'dark'],
            resist: ['fighting', 'psychic']
        },
        {
            weak: ['fire', 'fighting', 'rock', 'steel'],
            resist: ['ice']
        },
        {
            weak: ['ice', 'dragon', 'fairy'],
            resist: ['fire', 'water', 'grass', 'electric']
        },
        {
            weak: ['fighting', 'bug', 'fairy'],
            resist: ['ghost', 'dark'],
            immune: ['psychic']
        },
        {
            weak: ['poison', 'steel'],
            resist: ['fighting', 'bug', 'dark'],
            immune: ['dragon']
        }
    ]

    const chartLookup = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // normal
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // fighting
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // flying
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // poison
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // ground
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // rock
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // bug
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // ghost
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // steel
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // fire
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // water
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // grass
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // electric
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // psychic
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // ice
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // dragon
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // dark
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // fairy
    ]

    return (
        <>
            {
                (pkmn.types) ?
                <>
                    <h1> {(pkmn.types[1]) ? 
                        `${pkmn.types[0].type.name} ${pkmn.types[1].type.name}` : 
                        pkmn.types[0].type.name}
                    </h1>
                    {console.log(pkmn.types[0].type.id)}
                    <h1>Weak to: {typeLookup[pkmn.types[0].type.url.split('/')[6] - 1].weak}</h1>
                    <h1>Resists: {typeLookup[pkmn.types[0].type.url.split('/')[6] - 1].resist}</h1>
                    <h1>Immune to: {typeLookup[pkmn.types[0].type.url.split('/')[6] - 1].immune}</h1>
                </> : <h1>Loading</h1>
            }
        </>
    )
}

export default PkmnInfo;