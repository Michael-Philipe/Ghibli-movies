import React, { useEffect, useState } from 'react'
import Film from '../Film'
import api from '../../services/api'
import { FilmsContainer } from './style'



function ListFilms() {

  const [listFilms, setListFilms] = useState('')

  useEffect(()=> {
    api.get('/films').then((response) =>{
    setListFilms(response.data)
    return response.data
  }).then((e)=> console.log(e))
  },[])

  return (
    <FilmsContainer>
      {listFilms && listFilms.map(({image,title, release_date, id})=> {
        return <Film key={id} image={image} title={title} release_date={release_date}/>
      })}
    </FilmsContainer>
  )
}

export default ListFilms