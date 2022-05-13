import React from 'react'
import { useGetFilmByIdQuery } from '../../services/films'
import { useParams } from  'react-router-dom'


function InfoFilm() {

  let params = useParams()

  const {data, error, isLoading} = useGetFilmByIdQuery(params.id)
  console.log(params.id)
  return (
    <>
    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <h1>{data.title}</h1>
      ) : null}</>
  )
}

export default InfoFilm