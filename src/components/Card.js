import React from 'react'

export default function Card({character}) {
  return (
    <div className='card '>
        <img src={character.image} alt=""></img>
        <div className='text-container'>
            <h3>{character.name}</h3>
            <p className='status'>
                {character.status} - {character.species}
            </p>
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <a href='{character.episode}'> Next episode</a>
            <p className=''></p>
        </div>
    </div>
  )
}
