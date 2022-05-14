import Film from '../Film';
import { FilmsContainer, InputContainer } from './style';
import { useGetFilmByIdQuery } from '../../services/films';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Form from '../Form';

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
        <Form searchText={searchText} setSearchText={setSearchText} />
      </InputContainer>
      <FilmsContainer>
        {error ? (
          //fazer componente de erro
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
