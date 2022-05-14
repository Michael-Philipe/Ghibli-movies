import Film from '../Film';
import { FilmsContainer, InputContainer } from './style';
import { useGetFilmByIdQuery } from '../../services/films';
import { useEffect, useState } from 'react';
import Loading from '../Loading';

function ListFilms() {
  const { data, error, isLoading } = useGetFilmByIdQuery();

  const [searchText, setSearchText] = useState('');
  const [filteredFilms, setFilteredFilms] = useState('');

  useEffect(() => {
    if (data) {
      setFilteredFilms(
        data.filter((item) =>
          Object.keys(item).some((key) =>
            item[key]
              .toString()
              .toLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )
        )
      );
    }
  }, [data, searchText]);

  return (
    <>
      <InputContainer>
        <form>
          <input
            id='search'
            type='text'
            placeholder='Search movies..'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <label for='search'></label>
        </form>
      </InputContainer>
      <FilmsContainer>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <Loading />
        ) : filteredFilms ? (
          filteredFilms.map(({ image, title, release_date, id }) => {
            return (
              <Film
                key={id}
                image={image}
                title={title}
                release_date={release_date}
                id={id}
              />
            );
          })
        ) : null}
      </FilmsContainer>
    </>
  );
}

export default ListFilms;
