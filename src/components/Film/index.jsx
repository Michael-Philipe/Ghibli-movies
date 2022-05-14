import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmWrapper } from './style';

function Film({ title, image, release_date, id }) {
  return (
    <Link to={`/film/${id}`}>
      <FilmWrapper>
        <img src={image} alt={`imagem do filme ${title}`} />
        <div className='title'>
          <span>{title}</span>
          <span>{release_date}</span>
        </div>
      </FilmWrapper>
    </Link>
  );
}

Film.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  release_date: PropTypes.string,
  id: PropTypes.string,
};

export default Film;
