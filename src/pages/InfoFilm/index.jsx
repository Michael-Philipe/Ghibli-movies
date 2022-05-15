import React from 'react';
import { useGetFilmByIdQuery } from '../../services/films';
import { useParams } from 'react-router-dom';
import { Background, DescriptionWrapper } from './style';
import Loading from '../../components/Loading';

function InfoFilm() {
  let params = useParams();

  const { data, error, isLoading } = useGetFilmByIdQuery(params.id);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        <>
          <Background image={data.movie_banner}>
            <header>
              <h1>{data.title}</h1>
            </header>
          </Background>
          <DescriptionWrapper>
            <header>
              <h1>Description</h1>
            </header>
            <div className='description'>
              <p>{data.description}</p>
            </div>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <div>
              <header>
                <h1>Info</h1>
              </header>
              <p>{`Romanised Title: ${data.original_title_romanised}`}</p>
              <p>{`Release Date: ${data.release_date}`}</p>
              <p>{`Director: ${data.director}`}</p>
              <p>{`Producer: ${data.producer}`}</p>
            </div>
          </DescriptionWrapper>
        </>
      ) : null}
    </div>
  );
}

export default InfoFilm;
