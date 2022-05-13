import Film from '../Film'
import { FilmsContainer } from './style'
import {useGetFilmByIdQuery} from '../../services/films'



function ListFilms() {

  const {data, error, isLoading} = useGetFilmByIdQuery()

  return (
    <FilmsContainer>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map(({image,title, release_date, id})=> {
          return <Film key={id} image={image} title={title} release_date={release_date} id={id}/>
        })
      ) : null}
    </FilmsContainer>
  ) 
}



export default ListFilms