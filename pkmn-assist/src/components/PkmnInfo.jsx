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
        //.then(console.log(pkmn))
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
    // const typeLookup = [
    //     {
    //         weak: ['fighting'],
    //         immune: ['ghost']
    //     },
    //     {
    //         weak: ['flying', 'psychic', 'fairy'],
    //         resist: ['bug', 'rock', 'dark']
    //     },
    //     {
    //         weak: ['electric', 'ice', 'rock'],
    //         resist: ['grass', 'fighting', 'bug'],
    //         immune: ['ground']
    //     },
    //     {
    //         weak: ['ground', 'psychic'],
    //         resist: ['grass', 'fighting', 'poison', 'bug', 'fairy']
    //     },
    //     {
    //         weak: ['water', 'grass', 'ice'],
    //         resist: ['poison', 'rock'],
    //         immune: ['electric']
    //     },
    //     {
    //         weak: ['water', 'grass', 'fighting', 'ground', 'steel'],
    //         resist: ['normal', 'fire', 'poison', 'flying']
    //     },
    //     {
    //         weak: ['fire', 'flying', 'rock'],
    //         resist: ['grass', 'fighting', 'ground']
    //     },
    //     {
    //         weak: ['ghost', 'dark'],
    //         resist: ['poison', 'bug'],
    //         immune: ['normal', 'fighting']
    //     },
    //     {
    //         weak: ['fire', 'fighting', 'ground'],
    //         resist: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'],
    //         immune: ['poison']
    //     },
    //     {
    //         weak: ['water', 'ground', 'rock'],
    //         resist: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy']
    //     },
    //     {
    //         weak: ['grass', 'electric'],
    //         resist: ['fire', 'water', 'ice', 'steel']
    //     },
    //     {
    //         weak: ['fire', 'ice', 'poison', 'flying', 'bug'],
    //         resist: ['water', 'grass', 'electric', 'ground']
    //     },
    //     {
    //         weak: ['ground'],
    //         resist: ['electric', 'flying', 'steel']
    //     },
    //     {
    //         weak: ['bug', 'ghost', 'dark'],
    //         resist: ['fighting', 'psychic']
    //     },
    //     {
    //         weak: ['fire', 'fighting', 'rock', 'steel'],
    //         resist: ['ice']
    //     },
    //     {
    //         weak: ['ice', 'dragon', 'fairy'],
    //         resist: ['fire', 'water', 'grass', 'electric']
    //     },
    //     {
    //         weak: ['fighting', 'bug', 'fairy'],
    //         resist: ['ghost', 'dark'],
    //         immune: ['psychic']
    //     },
    //     {
    //         weak: ['poison', 'steel'],
    //         resist: ['fighting', 'bug', 'dark'],
    //         immune: ['dragon']
    //     }
    // ]

    const chartLookup = [
    //   nor  fig  fly  poi  gro  roc  bug  gho  ste  fir  wat  gra  ele  psy  ice  dra  dar  fai
        [1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // normal
        [1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 2.0], // fighting
        [1.0, 0.5, 1.0, 1.0, 0.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0], // flying
        [1.0, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5], // poison
        [1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.0, 1.0, 2.0, 1.0, 1.0, 1.0], // ground
        [0.5, 2.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // rock
        [1.0, 0.5, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], // bug
        [0.0, 0.0, 1.0, 0.5, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0], // ghost
        [0.5, 2.0, 0.5, 0.0, 2.0, 0.5, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 0.5, 0.5, 0.5, 1.0, 0.5], // steel
        [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 0.5, 1.0, 1.0, 0.5], // fire
        [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0], // water
        [1.0, 1.0, 2.0, 2.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0], // grass
        [1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0], // electric
        [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0], // psychic
        [1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0], // ice
        [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 1.0, 2.0, 2.0, 1.0, 2.0], // dragon
        [1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.5, 2.0], // dark
        [1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.5, 1.0]  // fairy
    ];

    return (
        <>
            {
                (pkmn.types) ?
                <>
                    <div className={"typeBox"} style={{backgroundColor:'transparent', height: '8rem'}}> 
                        <img id='mainPic' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.id}.png`} alt={pkmn.id} />
                        {(pkmn.types[1]) ? 
                        <><div className={pkmn.types[0].type.name}>{pkmn.types[0].type.name}</div><div className={pkmn.types[1].type.name}>{pkmn.types[1].type.name}</div></> : 
                        <div className={pkmn.types[0].type.name}><p>{pkmn.types[0].type.name}</p></div>}
                        <h1>Abilities: {pkmn.abilities.map((ability, index) => <span>{ability.ability.name + (ability.is_hidden ? "(Hidden)" : "") + (index != pkmn.abilities.length - 1 ? ', ' : '')}</span>)}</h1>
                    </div>
                    <div className={"typeBox"}>4x: {orderedTypes.map((type, i) => 
                        {
                            return (pkmn.types[1]) ? 
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] * chartLookup[pkmn.types[1].type.url.split('/')[6] - 1][i] == 4) ? 
                                    <div className={type} key={type}><p>{type}</p></div> : '' 
                                    :
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] == 4) ?
                                    <div className={type} key={type}><p>{type}</p></div> 
                                    : ''
                        }
                    )}</div>
                    <div className={"typeBox"}>2x: {orderedTypes.map((type, i) => 
                        {
                            return (pkmn.types[1]) ? 
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] * chartLookup[pkmn.types[1].type.url.split('/')[6] - 1][i] == 2) ? 
                                    <div className={type} key={type}><p>{type}</p></div> : '' 
                                    :
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] == 2) ?
                                    <div className={type} key={type}><p>{type}</p></div> 
                                    : ''
                        }
                    )}</div>
                    {/* <div className={"typeBox"}>1x: {orderedTypes.map((type, i) => 
                        {
                            return (pkmn.types[1]) ? 
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] * chartLookup[pkmn.types[1].type.url.split('/')[6] - 1][i] == 1) ? 
                                    <div className={type} key={type}><p>{type}</p></div> : '' 
                                    :
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] == 1) ?
                                    <div className={type} key={type}><p>{type}</p></div> 
                                    : ''
                        }
                    )}</div> */}
                    <div className={"typeBox"}>&frac12;x: {orderedTypes.map((type, i) => 
                        {
                            return (pkmn.types[1]) ? 
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] * chartLookup[pkmn.types[1].type.url.split('/')[6] - 1][i] == 0.5) ? 
                                    <div className={type} key={type}><p>{type}</p></div> : '' 
                                    :
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] == 0.5) ?
                                    <div className={type} key={type}><p>{type}</p></div> 
                                    : ''
                        }
                    )}</div>
                    <div className={"typeBox"}>&frac14;x: {orderedTypes.map((type, i) => 
                        {
                            return (pkmn.types[1]) ? 
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] * chartLookup[pkmn.types[1].type.url.split('/')[6] - 1][i] == 0.25) ? 
                                    <div className={type} key={type}><p>{type}</p></div> : '' 
                                    :
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] == 0.25) ?
                                    <div className={type} key={type}><p>{type}</p></div> 
                                    : ''
                        }
                    )}</div>
                    <div className={"typeBox"}>0x: {orderedTypes.map((type, i) => 
                        {
                            return (pkmn.types[1]) ? 
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] * chartLookup[pkmn.types[1].type.url.split('/')[6] - 1][i] == 0) ? 
                                    <div className={type} key={type}><p>{type}</p></div> : '' 
                                    :
                                (chartLookup[pkmn.types[0].type.url.split('/')[6] - 1][i] == 0) ?
                                    <div className={type} key={type}><p>{type}</p></div> 
                                    : ''
                        }
                    )}</div>
                </> : <div className={"typeBox"}>Loading</div>
            }
        </>
    )
}

export default PkmnInfo;