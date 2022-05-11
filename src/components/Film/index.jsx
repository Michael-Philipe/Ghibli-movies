import React from 'react'

import {FilmWrapper} from './style'

function Film({title,image,release_date}) {

  return (
  <FilmWrapper>
    <img src={image} alt={`imagem do filme ${title}`} />
    <div>
      <span>{title}</span>
      <span>{release_date}</span>
    </div>
  </FilmWrapper>
  )
}

export default Film